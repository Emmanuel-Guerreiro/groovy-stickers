import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { app } from "../firebase/base";

const imagenes1 = [
  {
    nombre: "foto1",
    src: "https://picsum.photos/1024/300",
    texto:
      '"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."',
  },
  {
    nombre: "foto2",
    src: "https://picsum.photos/1024/300",
    texto:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
  },
  {
    nombre: "foto3",
    src: "https://picsum.photos/1024/300",
    texto:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
  },
];

const CarouselImagenes = () => {
  const [imagenes, setImagenes] = useState([]);
  const [buscar, setBuscar] = useState(true);

  useEffect(() => {
    if (buscar) {
      const storage = app.storage();
      const referencia = storage.refFromURL(
        "gs://implementacion1.appspot.com/A/A1.jpg"
      );



      setImagenes(await referencia.child('A/A1.jpg').getDownloadURL());
      console.log(imagenes);
      setBuscar(false);
    }
  }, [imagenes]);

  return (
    <Carousel>
      {imagenes1.map((objeto) => {
        return (
          <Carousel.Item key={objeto.nombre}>
            <img className="d-block w-100" src={objeto.src} alt="First slide" />
            <Carousel.Caption>
              <h3>{objeto.nombre}</h3>
              <p>{objeto.texto}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselImagenes;
