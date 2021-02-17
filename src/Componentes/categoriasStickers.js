import React, { useState, useEffect } from "react";
import { app } from "../firebase/base";

/*TODO: modificar todo el fetch de data para que lo haga a 
cloud firestore y no a storage*/
/*TODO: ver otra solucion a ese timeout de 3 segundos, para que si 
lo usa alguien con mejor internet, no espere lo mismo */

//import componentes
import Loader from "./loader";
import TarjetaCategoria from "./tarjetaCategoria/tarjetaCategoria";

const Categorias = () => {
  //A partir de aca podria sacar para hacer un hook
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState(true);

  var arrayAyuda = [];

  const funcionShow = async (imageRef) => {
    const url = await imageRef.getDownloadURL();
    arrayAyuda.push(url);
    setImagenes(arrayAyuda);
  };

  useEffect(() => {
    const buscarImagenes = async () => {
      if (buscar) {
        const storage = app.storage();
        const referenciaCarpeta = storage.refFromURL(
          "gs://implementacion1.appspot.com/categorias"
        );
        referenciaCarpeta.listAll().then((imagenesObtenidas) => {
          imagenesObtenidas.items.forEach((imageRef) => {
            funcionShow(imageRef);
          });
        });

        console.log(imagenes);

        /*Este timeout busca atrasar el cambio de estado en el loading
        para que se llegue a cargar bien el array de imagenes*/
        setTimeout(() => {
          setLoading((prevState) => !prevState);
        }, 3000);

        setBuscar((prevState) => !prevState);
      }
    };
    if (imagenes.length <= 4) {
      buscarImagenes();
    }
    console.log(imagenes.length);
  }, [imagenes, buscar]);

  //aca terminaria lo que puedo sacar para hacer un hook
  let contenido = <Loader loading={loading} />;
  if (loading) {
    contenido = <Loader />;
  } else {
    contenido = imagenes.map((imagen) => {
      return <TarjetaCategoria imagen={imagen} />;
    });
  }

  return (
    <div className={`d-flex container  vw-100 ${loading ? "my-5" : null}`}>
      <div className="d-flex flex-wrap w-100 mx-auto my-2 px-auto">
        {contenido}
      </div>
    </div>
  );
};

export default Categorias;
