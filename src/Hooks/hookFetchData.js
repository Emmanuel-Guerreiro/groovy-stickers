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

const useFetchData = (coleccion) => {
  const [imagenes, setImagenes] = useState([]);
  const db = app.firestore();

  useEffect(() => {
    var arrayAyuda = [];
    //Esta forma de definir la coleccion a la que llamar es consecuencia de
    //un error que no me deja poner solo la variable
    db.collection(coleccion)
      .get()
      .then((res) =>
        res.forEach((doc) => {
          arrayAyuda.push(doc.data());
          setImagenes([...arrayAyuda]);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return imagenes;
};

export default useFetchData;
