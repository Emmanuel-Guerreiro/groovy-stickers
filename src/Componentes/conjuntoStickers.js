import React, { useState, useEffect } from "react";

//importo hooks
import useBusquedaDatos from "../Hooks/busquedaDatos";
import useFetchData from "../Hooks/hookFetchData";

//import componentes
import Loader from "./loader";
import TarjetaPreview from "./tarjetaPreview";

/*Descripcion: 
Este componente se encarga de darle formato a las imagenes a mostrar. Es 
utilizado para mostrar tanto las categorias como los stickers.

PROPS: 
tamanoCont: El tamaño relativo respecto al container mayor
tamanoImg: Es el tamaño en rem de la TarjetaPreview
imagenes: Es el conjunto de imagenes que el componente padre ya busco*/

const ConjuntoStickers = ({
  tamanoCont,
  tamanoImg,
  imagenes,
  margenX,
  preLink,
}) => {
  return (
    <div
      className={`d-flex flex-wrap justify-content-center ${tamanoCont} ${margenX} my-5 px-auto`}
    >
      {imagenes.map((objeto) => {
        return (
          <TarjetaPreview
            objeto={objeto}
            key={objeto.nombre}
            tamano={tamanoImg}
            preLink={preLink}
          />
        );
      })}
    </div>
  );
};

export default ConjuntoStickers;
