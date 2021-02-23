import React from "react";

const Codigo = ({ nombre, tamano }) => {
  const codigoSticker = "#" + nombre + tamano;
  return (
    <div className="d-flex flex-row mt-2">
      <p>
        <small>Codigo sticker:</small>
      </p>
      <p className="ml-1">
        <small>{codigoSticker}</small>
      </p>
    </div>
  );
};

export default Codigo;
