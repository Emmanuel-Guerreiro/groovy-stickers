import React from "react";
import { Nav } from "react-bootstrap";

//importo iconos
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faInstagram);

const ColumnaDosNav = () => {
  return (
    <Nav className="d-flex flex-column justify-content-center p-2 mb-2 mt-1">
      <Nav.Item>
        <h4>Contacto</h4>
      </Nav.Item>
      <Nav.Item>
        <p className="text-muted p-0 mb-1">
          <small>Telefono1</small>
        </p>
      </Nav.Item>
      <Nav.Item>
        <p className="text-muted p-0 mb-1">
          <small>Telefono2</small>
        </p>
      </Nav.Item>
      <Nav.Item>
        <p className="text-muted p-0 mb-1">
          <small>mail</small>
        </p>
      </Nav.Item>
      <Nav.Item>
        <div className="d-flex flex-row">
          <a
            href="https://www.facebook.com/Groovy-Stickers-104525708167474/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="1x"
              color="white"
            />
          </a>
          <a
            href="https://www.instagram.com/groovy_stickerss/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="1x"
              color="white"
            />
          </a>
        </div>
      </Nav.Item>
    </Nav>
  );
};

export default ColumnaDosNav;
