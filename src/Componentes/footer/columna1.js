import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ColumnaUnoNav = () => {
  return (
    <Nav className="d-flex flex-column justify-content-center p-2 mb-2 mt-1">
      <Nav.Item>
        <h4>Navegacion</h4>
      </Nav.Item>
      <LinkContainer to="/">
        <Nav.Link className="text-muted p-0">Inicio</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/productos">
        <Nav.Link className="text-muted p-0">Productos</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/como-comprar">
        <Nav.Link className="text-muted p-0">Como comprar</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contacto">
        <Nav.Link className="text-muted p-0">Contacto</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default ColumnaUnoNav;
