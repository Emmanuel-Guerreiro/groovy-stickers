import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { app } from "../firebase/base";
import { LinkContainer } from "react-router-bootstrap";

//importo componentes propios
import Loader from "./loader";

const CarouselImagenes = () => {
  const [imagenes, setImagenes] = useState([]);
  const [buscar, setBuscar] = useState(true);
  const [loading, setLoading] = useState(true);

  var arrayAyuda = [];

  const funcionShow = async (imageRef) => {
    const url = await imageRef.getDownloadURL();
    arrayAyuda.push(url);
    setImagenes(arrayAyuda);
  };

  useEffect(() => {
    const buscarImagenes = async () => {
      if (buscar) {
        const storage = app.storage();
        const referenciaCarpeta = storage.refFromURL(
          "gs://implementacion1.appspot.com/categorias"
        );
        referenciaCarpeta.listAll().then((imagenesObtenidas) => {
          imagenesObtenidas.items.forEach((imageRef) => {
            funcionShow(imageRef);
          });
        });

        setTimeout(() => {
          setLoading((prevState) => !prevState);
        }, 3000);
        console.log(imagenes);
        setBuscar((prevState) => !prevState);
      }
    };
    buscarImagenes();
  }, [imagenes, buscar]);

  let contenido;
  if (loading) {
    contenido = <Loader />;
  } else {
    contenido = imagenes.map((objeto) => {
      return (
        <Carousel.Item className="mh-25">
          <LinkContainer to="/productos">
            <img className="d-block w-100 " src={objeto} alt="First slide" />
          </LinkContainer>
          <Carousel.Caption className="text-dark py-0">
            <h3>imagen 1</h3>
            <p className="mb-0">lorem ipsum</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }

  return (
    <div className="container-fluid vw-100 mx-0 px-0 vh-25">
      <Carousel>
        <div style={{ height: "18rem" }}>{contenido}</div>
      </Carousel>
    </div>
  );
};

export default CarouselImagenes;
/* */
