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

const useFetchData = ({ coleccion }) => {
  const [buscar, setBuscar] = useState(true);
  var db = app.firestore();
  var docRef = db.collection(coleccion);
  let arrayAyuda = [];
  useEffect(() => {
    if (buscar) {
      docRef.get().then((datosImg) => {
        console.log(datosImg);
        arrayAyuda.push(datosImg);
      });
      setBuscar(false);
    }
  }, []);
  return arrayAyuda;
};

export default useFetchData;
