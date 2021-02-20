import React, { useState } from "react";

import StickerDetallado from "../Componentes/detallesSticker/stickerDetallada";
import ImagenGrande from "../Componentes/detallesSticker/imagenGrande";

//TODO: ver que cuando haga click en la imagen del sticker la muestre bien grande

const PaginaPrueba = () => {
  const [imagenAbierta, setImagenAbierta] = useState(false);

  let imagen;
  if (imagenAbierta) {
    imagen = <ImagenGrande />;
  }

  return (
    <div id="Container mayor" className="container-fluid">
      <div style={{ zIndex: 0 }} className="container-fluid">
        <StickerDetallado setImagenAbierta={setImagenAbierta} />
      </div>
      <div style={{ zIndex: 100 }} className="container-fluid h-100 w-100">
        {imagen}
      </div>
    </div>
  );
};

export default PaginaPrueba;
