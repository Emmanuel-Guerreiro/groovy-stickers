import React from "react";

//importo las columnas de la parte de abajo
import ColumnaUnoNav from "./columna1";
import ColumnaDosNav from "./columna2";
//importo iconos
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter, faInstagram);

//TODO: ver si agrego una 3era columna diferenciando productos o solo voy por 2
//y las acomodo en el flex
//TODO: Descomponer en mas pequeños?

const PiePagina = () => {
  return (
    <div className="w-100 text-light">
      <div className="row m-0 bg-dark">
        <div className="col">
          <ColumnaUnoNav />
        </div>
        <div className="col">
          <ColumnaDosNav />
        </div>
        <div className="col">3</div>
      </div>
      <div className="row m-0 bg-secondary d-flex justify-content-between">
        <p className="m-2">
          <small>Groovy stickers</small>
        </p>
        <div className="d-flex flex-col text-light pt-2 ">
          <p className="px-2 mb-0">
            <small>Creado por EmmaGuerreiro</small>
          </p>
          <a
            className="mx-2"
            href="https://twitter.com/e3mmanu3l"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} color="white" />
          </a>
          <a
            className="mx-2"
            href="https://instagram.com/emmagh8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PiePagina;
