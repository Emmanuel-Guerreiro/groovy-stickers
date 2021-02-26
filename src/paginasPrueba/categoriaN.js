import React, { useEffect, useState } from "react";

import StickerDetallado from "../Componentes/detallesSticker/stickerDetallada";
import cargaCloudFirestore from "../cargarFirebase/cargarDatosFirebase/storage/getMetadata";
import useFetchData from "../Hooks/hookFetchData";
//TODO: ver que cuando haga click en la imagen del sticker la muestre bien grande

const PaginaPrueba = () => {
  /*Este estado de imagen es temporal, y el de nombre, es mejor 
  usarlo con el hook de busqueda y dejarlo en una constante*/
  const [imagen, setImagen] = useState("http://placekitten.com/g/450/450");
  const [imagenAlt, setImagenAlt] = useState("Soy el alt");
  const [nombre, setNombre] = useState("NombreSticker");
  useFetchData("categorias");
  useEffect(() => {
    //cargaCloudFirestore();
  }, []);
  return (
    <div className="container">
      <StickerDetallado imagen={imagen} imagenAlt={imagenAlt} nombre={nombre} />
    </div>
  );
};

export default PaginaPrueba;
