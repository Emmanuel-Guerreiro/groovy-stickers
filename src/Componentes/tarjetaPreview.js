import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//TODO: ver si descompongo en menores componentes
//TODO: Ver de componer lo que aparece en el hover

/*Descripcion componente:
    Toma la imagen correspondiente de la "carpeta" de categorias en firebase
    Saca a demas nombres y alguna pequeña descripcion
    Muestra el nombre y la descripcion de manera mas detallada en hover
    Al tocar en esta lleva a la lista de stickers de dicha categoria */

/*Del nombre de la imagen que llega, (ya sea categoria o nombre de 
  sticker), tiene que generar un estado, tal que, al clickearlo,
  se pueda trabajar con el routing
  Por ejemplo: Si le llega de nombre, dentor de los datos de la imagen,
  A (categoria A) => tiene que, en el onClick, setear un estado hacia 
  arriba, que permita ir a categorias/A  */

const TarjetaPreview = ({ objeto }) => {
  return (
    <div
      className="mx-auto shadow p-0 my-3 bg-white rounded"
      style={{ width: "18rem" }}
    >
      <LinkContainer to="/">
        <Card className="mx-0 p-0 border-rounded" as="button">
          <Card.Img variant="top" src={objeto.imagen} alt={objeto.nombre} />
          <Card.Body className="w-100 p-0 ">
            <Card.Text
              className="d-flex justify-content-center 
            bg-light text-dark w-100 border-rounded my-2"
            >
              {objeto.nombre}
            </Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    </div>
  );
};

export default TarjetaPreview;
