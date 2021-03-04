import React, { useEffect, useState } from "react";
import { app } from "../firebase/base";

/*Descripcion:
Este hook se encarga de obtener de firebase, la categoria de un documento en
funcion del nombre de este (la propiedad nombre, no el id de este)
para que despues se pueda usar en la busqueda de la coleccion que tiene 
el mismo nombre que la categoria que busco
*/

//TODO: ver de reformarlo para que este mas prolijo, es desordenado

const useGetCategoria = (nombre) => {
  var db = app.firestore();
  const [categoriaObt, setCategoria] = useState("");

  useEffect(() => {
    console.log(nombre);
    db.collection("categorias")
      .where("nombre", "==", nombre)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setCategoria(doc.data());
        });
      });
  }, []);

  return categoriaObt.categoria;
};

export default useGetCategoria;
