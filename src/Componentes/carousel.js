import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//importo componentes propios
import Loader from "./loader";
import useBusquedaDatos from "../Hooks/busquedaDatos";

const CarouselImagenes = () => {
  const [loading, setLoading] = useState(true);
  const imagenes = useBusquedaDatos("categorias");

  useEffect(() => {
    setTimeout(setLoading(false), 3000);
  }, []);

  console.log(imagenes);

  let contenido;
  if (loading) {
    contenido = <Loader />;
  } else {
    contenido = (
      <Carousel>
        {imagenes.map((imagen) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={imagen} alt="imagen n" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }

  return (
    <div className="container-fluid p-0">
      <div style={{ height: "30rem", backgroundColor: "#ea759e" }}>
        Carousell
      </div>
    </div>
  );
};

export default CarouselImagenes;
/* */
