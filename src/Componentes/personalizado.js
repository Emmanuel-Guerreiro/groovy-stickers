import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";

const Personalizado = () => {
  return (
    <div
      className="d-flex flex-column container w-75 rounded shadow p-3 "
      style={{ backgroundColor: "#f1ffa6" }}
    >
      <h3 className="mx-auto">Stickers peronalizados</h3>
      <p className="mx-auto">
        ¿Te gustaría hacer tus propios modelos o tamaños?
      </p>
      <p className="mx-auto mt-2">
        ¡Hablanos por Instagram, pásanos una foto y el tamaño, y lo hacemos para
        vos!
      </p>
      <section className="d-flex flex-inline justify-content-center mx-auto ">
        <a
          href="https://www.instagram.com/groovy_stickerss/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
        </a>
        <LinkContainer to="/como-comprar">
          <button className="btn btn-primary">Como comprar</button>
        </LinkContainer>
      </section>
    </div>
  );
};

export default Personalizado;
