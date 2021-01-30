import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { app } from "../firebase/base";

//import componentes
import Loader from "./loader";

const Categorias = () => {
  //A partir de aca podria sacar para hacer un hook
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState(true);

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
          "gs://implementacion1.appspot.com/A/"
        );
        referenciaCarpeta.listAll().then((imagenesObtenidas) => {
          imagenesObtenidas.items.forEach((imageRef) => {
            funcionShow(imageRef);
          });
        });

        console.log(imagenes);

        /*Este timeout busca atrasar el cambio de estado en el loading
        para que se llegue a cargar bien el array de imagenes*/
        setTimeout(() => {
          setLoading((prevState) => !prevState);
        }, 2500);

        setBuscar((prevState) => !prevState);
      }
    };
    if (imagenes.length <= 4) {
      buscarImagenes();
    }
    console.log(imagenes.length);
  }, [imagenes]);

  //aca terminaria lo que puedo sacar para hacer un hook
  let contenido;
  if (loading) {
    contenido = <Loader />;
  } else {
    contenido = imagenes.map((imagen) => {
      return (
        <div className="mx-auto" style={{ width: "18rem" }}>
          <LinkContainer to="/">
            <Card className="mx-0 my-3 p-0 border-rounded" as="button">
              <Card.Img variant="top" src={imagen} />
              <Card.Body className="w-100 p-0">
                <Card.Text className="d-flex justify-content-center bg-dark text-light w-100">
                  soy algo de texto
                </Card.Text>
              </Card.Body>
            </Card>
          </LinkContainer>
        </div>
      );
    });
  }

  return (
    <div className=" container mx-auto vw-100">
      <div className="d-flex flex-wrap w-100 mx-auto">{contenido}</div>
    </div>
  );
};

export default Categorias;
