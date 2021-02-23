import React from "react";
import Modal from "react-bootstrap/Modal";
/*Descripcion componente:
Esta "imagen modal" es la imagen en grande que se muestra cuando,
dentro de la descripcion de un sticker, se toca la imagen.  */

const ImagenModal = ({ imagen, alt }) => {
  return (
    <div>
      <Modal.Body className="p-0">
        <img src={imagen} alt={alt} className="w-100 h-100" />
      </Modal.Body>
      <Modal.Footer className="d-flex p-1">
        <h5 className="mx-auto">Nombre Sticker</h5>
      </Modal.Footer>
    </div>
  );
};

export default ImagenModal;
