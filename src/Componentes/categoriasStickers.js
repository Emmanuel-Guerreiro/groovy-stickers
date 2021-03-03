import React, { useState, useEffect } from "react";

/*TODO: modificar todo el fetch de data para que lo haga a 
cloud firestore y no a storage*/
/*TODO: ver otra solucion a ese timeout de 3 segundos, para que si 
lo usa alguien con mejor internet, no espere lo mismo */

//importo hooks
import useBusquedaDatos from "../Hooks/busquedaDatos";
import useFetchData from "../Hooks/hookFetchData";

//import componentes
import Loader from "./loader";
import TarjetaPreview from "./tarjetaPreview";

const Categorias = () => {
  const [loading, setLoading] = useState(true);

  var imagenes = [];

  imagenes = useFetchData();

  useEffect(() => {
    setTimeout(setLoading(false), 3000);
  }, []);
  let contenido;
  if (loading) {
    contenido = <Loader loading={loading} />;
  } else {
    contenido = imagenes.map((objeto) => {
      return <TarjetaPreview objeto={objeto} key={objeto.nombre} />;
    });
  }

  return (
    <div className={`d-flex container wrap px-0 ${loading ? "my-5" : null}`}>
      <div className="d-flex flex-wrap justify-content-center sw-100 mx-auto my-2 px-auto">
        {contenido}
      </div>
    </div>
  );
};

export default Categorias;
