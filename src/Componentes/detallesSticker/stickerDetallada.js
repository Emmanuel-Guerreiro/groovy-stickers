import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import BotonesTamano from "./botonesTamano";
import ImagenModal from "./imagenModal";
import Codigo from "./codigoSticker";

//TODO: Ver de dar tamaño responsivo imagen
//TODO: El boton de agregar al carrito tiene que manejar el estado
//global para que se agregue a la lista. Por ahora es useless
//TODO: Agregar la opcion de tamaño detallado de sticker y ver como manejarlo

const StickerDetallado = ({ imagen, imagenAlt, nombre }) => {
  const [tamano, setTamano] = useState("M");

  //Este estado, y esas dos funciones corresponden a la imagen Modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div
      className="d-flex flex-row shadow-lg
     p-3 mb-5 bg-white rounded my-md-5"
    >
      <section className="mx-1">
        <img
          className="rounded m-2"
          src={imagen}
          alt={imagenAlt}
          style={{ cursor: "pointer", height: "30rem", width: "30rem" }}
          onClick={handleShow}
        />
        <Modal show={show} onHide={handleClose}>
          <ImagenModal imagen={imagen} alt={imagenAlt} />
        </Modal>
      </section>
      <section className="d-flex flex-column flex-wrap mx-5">
        <div className="my-auto">
          <h3>{nombre}</h3>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="mt-auto">
          <h6>asd</h6>
          <BotonesTamano tamano={tamano} setTamano={setTamano} />
          <Codigo tamano={tamano} nombre={nombre} />
        </div>
        <div className="mt-auto pb-2 ">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </section>
    </div>
  );
};

export default StickerDetallado;
