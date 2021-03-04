import React, { useState, useEffect } from "react";

import ConjuntoStickers from "../Componentes/conjuntoStickers";
import Loader from "../Componentes/loader";
import useFetchData from "../Hooks/hookFetchData";

/*Descripcion:
Esta es la pagina a la que se llega a traves de /productos y se encarga de 
mostrar las categorias disponibles de stickers.
Hace el fetch a la coleccion de categorias y despues pasa los parametros al 
componente ConjuntoStickers */

const Productos = () => {
  const [loading, setLoading] = useState(true);

  var imagenes = [];

  imagenes = useFetchData("categorias");

  useEffect(() => {
    setTimeout(setLoading(false), 3000);
  }, []);

  var contenido =
    loading === true ? (
      <Loader />
    ) : (
      <ConjuntoStickers
        tamanoImg="18rem"
        imagenes={imagenes}
        tamanoCont="sw-100"
        margenX="mx-auto"
        preLink="/productos"
      />
    );

  return <div className={`d-flex container wrap px-0 `}>{contenido}</div>;
};

export default Productos;
