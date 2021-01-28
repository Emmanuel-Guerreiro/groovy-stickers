import React from "react";
import { Carousel } from "react-bootstrap";

const imagenes = [
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
  return (
    <Carousel>
      {imagenes.map((objeto) => {
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
