import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//TODO: ver si descompongo en menores componentes

/*Descripcion componente:
    Toma la imagen correspondiente de la "carpeta" de categorias en firebase
    Saca a demas nombres y alguna pequeña descripcion
    Muestra el nombre y la descripcion de manera mas detallada en hover
    Al tocar en esta lleva a la lista de stickers de dicha categoria */

const TarjetaCategoria = ({ imagen }) => {
  return (
    <div
      className="mx-auto shadow p-0 my-3 bg-white rounded"
      style={{ width: "18rem" }}
    >
      <LinkContainer to="/">
        <Card className="mx-0 p-0 border-rounded" as="button">
          <Card.Img variant="top" src={imagen} />
          <Card.Body className="w-100 p-0 ">
            <Card.Text
              className="d-flex justify-content-center 
            bg-dark text-light w-100 border-rounded"
            >
              soy algo de texto
            </Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    </div>
  );
};

export default TarjetaCategoria;
