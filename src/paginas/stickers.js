import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Componentes/loader";
import TarjetaPreview from "../Componentes/tarjetaPreview";
import useGetCategoria from "../Hooks/hookCategoria";
import useFetchData from "../Hooks/hookFetchData";

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
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();
  const coleccion = useGetCategoria(categoria);
  const stickers = useFetchData(coleccion);

  useEffect(() => {
    setTimeout(setLoading(false), 3000);
  }, []);

  let contenido;
  if (loading) {
    contenido = <Loader loading={loading} />;
  } else {
    contenido = stickers.map((objeto) => {
      return <TarjetaPreview objeto={objeto} key={objeto.nombre} />;
    });
  }
  return <div>holis {categoria}</div>;
};

export default Stickers;
