import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram);

const BloqueRedes = () => {
  return (
    <div className="d-flex flex-column">
      <h5>Nuestras redes sociales</h5>
      <div className="d-flex flex-row">
        <a
          href="https://www.facebook.com/Groovy-Stickers-104525708167474/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-5"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
        </a>
        <a
          href="https://www.instagram.com/groovy_stickerss/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default BloqueRedes;
