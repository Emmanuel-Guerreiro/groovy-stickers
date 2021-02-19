import React, { useState, useEffect } from "react";
import { app } from "../firebase/base";

/*Este hook se encarga de conseguir la informacion de la base de firebase.
En principio, solo es capaz de traer imagenes, hay que corregirlo para que traiga
a demas, toda la informacion de dicho sticker/categoria */

const useBusquedaDatos = (carpeta) => {
  const [imagenes, setImagenes] = useState([]);
  const [buscar, setBuscar] = useState(true);

  var arrayAyuda = [];

  const funcionShow = async (imageRef) => {
    const url = await imageRef.getDownloadURL();
    arrayAyuda.push(url);
    setImagenes(arrayAyuda);
  };

  const buscarImagenes = async () => {
    if (buscar) {
      const storage = app.storage();
      const referenciaCarpeta = storage.refFromURL(
        `gs://implementacion1.appspot.com/${carpeta}`
      );
      referenciaCarpeta.listAll().then((imagenesObtenidas) => {
        imagenesObtenidas.items.forEach((imageRef) => {
          funcionShow(imageRef);
        });
      });

      console.log(imagenes);

      setBuscar((prevState) => !prevState);
    }
  };

  useEffect(() => {
    buscarImagenes();
    console.log(imagenes.length);
  }, [buscar]);

  return imagenes;
};

export default useBusquedaDatos;
