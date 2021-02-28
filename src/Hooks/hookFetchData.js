import React, { useEffect, useState } from "react";
import { app } from "../firebase/base";

/*Descripcion: Este hook es el que se encarga de obtener la 
informacion desde firestore. 

Props:
- coleccion => Es la coleccion de firebase a la que hace el query
Estados:
[buscar, setBuscar] => Es solo un flag de precaucion para que no 
se la pase haciendo querys y sature la capacidad gratis, hacer pruebas 
para ver si es indispensable 
*/

const useFetchData = ({ setLoading }) => {
  const [buscar, setBuscar] = useState(true);
  const db = app.firestore();

  if (buscar) {
    var imagenes = [];
    db.collection("categorias")
      .get()
      .then((res) =>
        res.forEach((doc) => {
          imagenes.push(doc.data());
        })
      )
      .catch((err) => console.log(err));

    setBuscar(false);
    console.log(imagenes);
    setLoading(false);
    return imagenes;
  }
};

export default useFetchData;
