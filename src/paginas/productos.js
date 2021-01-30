import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import Categorias from "../Componentes/categoriasStickers";

//Esta pagina muestra las categorias de los stickers y de ahi te lleva a mostrar todos los stickers de una categoria
//Probablemente pueda usar la misma idea que en carousel y sacarlo en comun (intentar hacer un hook)

const Productos = () => {
  return (
    <div>
      <Categorias />
    </div>
  );
};

export default Productos;
