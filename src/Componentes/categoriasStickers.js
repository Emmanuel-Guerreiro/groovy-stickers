import React, { useState, useEffect } from "react";

/*TODO: modificar todo el fetch de data para que lo haga a 
cloud firestore y no a storage*/
/*TODO: ver otra solucion a ese timeout de 3 segundos, para que si 
lo usa alguien con mejor internet, no espere lo mismo */

//importo hooks
import useBusquedaDatos from "../Hooks/busquedaDatos";

//import componentes
import Loader from "./loader";
import TarjetaPreview from "./tarjetaPreview";

const Categorias = () => {
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState(true);
  const imagenes = useBusquedaDatos(buscar, setBuscar);

  useEffect(() => {
    /*Este timeout busca atrasar el cambio de estado en el loading
        para que se llegue a cargar bien el array de imagenes*/
    setTimeout(() => {
      setLoading((prevState) => !prevState);
    }, 3000);
  });

  let contenido;
  if (loading) {
    contenido = <Loader loading={loading} />;
  } else {
    contenido = imagenes.map((imagen) => {
      return <TarjetaPreview imagen={imagen} />;
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
