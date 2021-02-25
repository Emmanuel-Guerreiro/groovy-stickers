import React from "react";
import Modal from "react-bootstrap/Modal";

//TODO: darle mas onda a este modal cuando le agregue la foto al contacto

const ModalEnviado = ({ setShow }) => {
  const handleClick = () => setShow(false);

  return (
    <div>
      <Modal.Header>
        <Modal.Title>Enviado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¡Tus datos fueron enviados correctamente! En breve nos comunicaremos con
        usted
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleClick}>
          Buenisimo
        </button>
      </Modal.Footer>
    </div>
  );
};

export default ModalEnviado;
