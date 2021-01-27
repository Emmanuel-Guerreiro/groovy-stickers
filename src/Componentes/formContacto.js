import React from "react";
import { Form } from "react-bootstrap";

//TODO: Ver de implementar una validacion propia, o recurrir a Formik para llevarla a cabo
//TODO: Ver como implementar MailJS para que se contacte drectamente con el mail de las chicas

const FormularioContacto = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Correo electronico" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Informacion</Form.Label>
        <Form.Control
          type="text"
          placeholder="Informacion"
          aria-describedby="informacionHelpBlock"
        />
        <Form.Text id="informacionHelpBlock" muted>
          Un poco de informacion sobre lo que buscas nos vendria bien para
          contactarnos mas facil
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default FormularioContacto;
