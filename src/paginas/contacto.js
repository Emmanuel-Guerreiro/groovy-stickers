import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//Importo componentes
import FormularioContacto from "../Componentes/formContacto";
import BloqueNumeros from "../ComponentesPlanos/bloqueNumeros";
import BloqueRedes from "../ComponentesPlanos/bloqueRedes";

/*La pagina de contacto necesita un formulario, un conjunto de iconos haciendo referencia a las RRSS y por ultimo un conjunto con los numeros de telefono. Ver si agrego algun sticker o algo que lo deje mas amigable. */

const Contacto = () => {
  return (
    <Container fluid="md" className="my-5">
      <Col xs={12} md={6}>
        <FormularioContacto />
      </Col>
      <Col xs={12} md={4}>
        <Row>
          <BloqueNumeros />
        </Row>
        <Row>
          <BloqueRedes />
        </Row>
      </Col>
    </Container>
  );
};

export default Contacto;
