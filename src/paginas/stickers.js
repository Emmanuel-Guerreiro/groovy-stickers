import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Componentes/loader";
import ConjuntoStickers from "../Componentes/conjuntoStickers";

import useFetchData from "../Hooks/hookFetchData";
import { app } from "./../firebase/base";
import ListaCat from "../Componentes/listaCategorias";

//TODO: Esto no es una pagina, hay que ver de acomodarlo para poner la lista de cat
//TODO: ver de reformarlo, esta desprolijo
/*Descripcion: 
Esta pagina muestra una lista de stickers que pertenecen a una cierta categoria
y a demas, permite saltar entre categorias con una barra lateral a la izquierda

Para poder elegir bien los stickers desde firebase, es necesario poder conectar
la "categoria" del url, que no es mas que el nombre de la categoria, con los stickers
que comparten la propiedad categoria dentro de los objetos de firebase. 
Es decir, cuando llego a amarillo, que es el nombre de la categoria, tiene
dentro de su doc en firebase, el campo categoria: A, y hay que buscar la coleccion
que tenga de nombre A */

const Stickers = () => {
  //!Ver de cmabiar este loading con los lazy imports de react.
  const [loading, setLoading] = useState(true);
  //*Data es el nombre de la coleccion que tiene los stickers que quiero buscar
  const [data, setData] = useState("B");
  //!Este estado y el tercer useEffect, son temporales hasta encontrar una sol
  const [imagenes, setImagenes] = useState([]);
  const { categoria } = useParams();
  var db = app.firestore();

  useEffect(() => {
    setTimeout(setLoading(false), 3000);
  }, []);

  /*Este useEffect busca en la firestore (dentro de la coleccion de categorias)
   el doc que tenga como nombre la categoria a la que llegue en la URL, para 
   despues sacar de ahi su categoria y buscar la coleccion que tiene los
   stickers correpsondientes a dicha categoria.*/
  useEffect(() => {
    db.collection("categorias")
      .where("nombre", "==", categoria)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setData(doc.data().categoria);
        });
      });
  }, []);

  useEffect(() => {
    var arrayAyuda = [];
    //Esta forma de definir la coleccion a la que llamar es consecuencia de
    //un error que no me deja poner solo la variable
    db.collection(data)
      .orderBy("nombre", "asc")
      .get()
      .then((res) =>
        res.forEach((doc) => {
          arrayAyuda.push(doc.data());
          setImagenes([...arrayAyuda]);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  var contenido =
    loading === true ? (
      <Loader />
    ) : (
      <ConjuntoStickers
        tamanoImg="12rem"
        imagenes={imagenes}
        tamanoCont="sw-100"
        margenX="mx-5 "
        preLink={`/productos/sticker/${categoria}`}
      />
    );

  return (
    <div className="d-flex bd-highlight ">
      <div
        className="d-flex container mr-2 border-right shadow "
        style={{ backgroundColor: "#fff" }}
      >
        <ListaCat />
      </div>
      {contenido}
    </div>
  );
};

export default Stickers;
