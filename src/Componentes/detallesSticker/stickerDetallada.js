import React, { useState } from "react";

import BotonesTamano from "./botonesTamano";

const StickerDetallado = ({ setImagenAbierta }) => {
  const [tamano, setTamano] = useState("M");

  const handleClick = () => {
    setImagenAbierta((prevState) => !prevState);
  };

  return (
    <div className="container container-fluid ">
      <div
        className="d-flex flex-row shadow-lg
     p-3 mb-5 bg-white rounded my-md-5"
      >
        <section className="mx-1">
          <img
            className="rounded m-2"
            src="http://placekitten.com/g/450/450"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
        </section>
        <div className="d-flex flex-column flex-wrap mx-5">
          <div className="my-auto">
            <h3>Nombre Sticker</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="my-auto">
            <h6>asd</h6>
            <BotonesTamano tamano={tamano} setTamano={setTamano} />
            <div className="d-flex flex-row mt-2">
              <p>Codigo sticker: </p>
              <p className="ml-1">#12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerDetallado;
