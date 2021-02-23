/*Descripcion Componente:
Es el conjunto de botones que permite seleccionar el tamaño del 
sticker que se quiere. Este debe tomar color en funcion de que tamaño
se eligio. Y a demas, ser capaz de modificar el estado "tamano" que 
viene desde stickerDetallada en funcion de la eleccion */

import React from "react";

//importo componentes
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import TooltipPropio from "./tooltip";

const BotonesTamano = ({ tamano, setTamano }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setTamano(e.target.value);
  };

  const colorBoton = (tamano, valor) => {
    const color = tamano === valor ? "success" : "secondary";
    return color;
  };

  return (
    <div className="btn-group mr-2 my-2" role="group" aria-label="Second group">
      <OverlayTrigger
        key="XL"
        placement="top"
        delay={{ show: 100, hide: 200 }}
        overlay={<TooltipPropio tamano="XL" />}
      >
        <button
          type="button"
          className={`btn btn-${colorBoton(tamano, "XL")}`}
          value="XL"
          onClick={handleClick}
        >
          XL
        </button>
      </OverlayTrigger>
      <button
        type="button"
        className={`btn btn-${colorBoton(tamano, "L")}`}
        value="L"
        onClick={handleClick}
      >
        L
      </button>
      <button
        type="button"
        className={`btn btn-${colorBoton(tamano, "M")}`}
        value="M"
        onClick={handleClick}
      >
        M
      </button>
      <button
        type="button"
        className={`btn btn-${colorBoton(tamano, "S")}`}
        value="S"
        onClick={handleClick}
      >
        S
      </button>
    </div>
  );
};

export default BotonesTamano;
