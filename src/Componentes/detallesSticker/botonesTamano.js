import React from "react";

/*Descripcion Componente:
Es el conjunto de botones que permite seleccionar el tamaño del 
sticker que se quiere. Este debe tomar color en funcion de que tamaño
se eligio. Y a demas, ser capaz de modificar el estado "tamano" que 
viene desde stickerDetallada en funcion de la eleccion */

const BotonesTamano = ({ tamano, setTamano }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setTamano(e.target.value);
  };

  return (
    <div className="btn-group mr-2 my-2" role="group" aria-label="Second group">
      <button
        type="button"
        class="btn btn-secondary"
        value="L"
        onClick={handleClick}
      >
        L
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        value="M"
        onClick={handleClick}
      >
        M
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        value="S"
        onClick={handleClick}
      >
        S
      </button>
    </div>
  );
};

export default BotonesTamano;
