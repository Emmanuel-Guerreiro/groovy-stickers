import React from "react";
import { Form, Button } from "react-bootstrap";

//TODO: Ver de implementar una validacion propia, o recurrir a Formik para llevarla a cabo
//TODO: Ver como implementar MailJS para que se contacte drectamente con el mail de las chicas
//TODO: Pasasr este componente a su propia carpeta con lo encargado de Formik y EmailJS
//TODO: En la validacion tener en cuenta numero de telefono
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
        <Form.Label>Número de telefono</Form.Label>
        <Form.Control type="tel" placeholder="Número de telefono" />
      </Form.Group>
      <Form.Group
        controlId="exampleForm.ControlTextarea1"
        aria-describedby="informacionHelpBlock"
      >
        <Form.Label>Información </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Información extra"
          resize="none"
          rows={3}
        />
        <Form.Text id="informacionHelpBlock" muted>
          Un poco de informacion sobre lo que buscas nos vendria bien para
          contactarnos mas facil
        </Form.Text>
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormularioContacto;
