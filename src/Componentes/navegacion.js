import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
/*TODO: hacer que la lista de PRODUCTOS se genere sola. 
Asi no quedan hardcodeadas las categorias. 
(mientras tanto queda hecha a mano)*/

/*TODO: ver si en la dropdown llevo a categorias de stickers o discrimino entre stickers 
y etiquetas o algo asi */

/*TODO: para el SVG ICONO meter dentro un img que le paso el SVG para poder solucionarlo */

const Navegacion = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand>Groovy</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/productos">
              <Nav.Link>Productos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/como-comprar">
              <Nav.Link>Como comprar</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navegacion;

/*<NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item>Todos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <LinkContainer to="/pruebaN">
                  <Nav.Link className="text-dark">Categoria A</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/pruebaN">
                  <Nav.Link className="text-dark">Categoria B</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/pruebaN">
                  <Nav.Link className="text-dark">Categoria C</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown> */
