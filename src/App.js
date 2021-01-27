import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//importo paginas
import Home from "./paginas/home";
import Productos from "./paginas/productos";
import Contacto from "./paginas/contacto";
import ComoComprar from "./paginas/comoComprar";
import NotFound from "./paginas/notFound";

//import componentes
import Navegacion from "./Componentes/navegacion";
//import Footer from "./Componentes/footer";

//importo pagina de pruebas
import PaginaPrueba from "./paginasPrueba/categoriaN";

//TODO: una vez listo el tema de las paginas de prueba borrar el import y el camino hacia estas
//TODO: Agrandar foto del icono en la barra de pestañas

const App = () => {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route exact path="/productos">
          <Productos />
        </Route>
        <Route exact path="/como-comprar">
          <ComoComprar />
        </Route>
        <Route exact path="/pagina-prueba">
          <PaginaPrueba />
        </Route>
        <Route path="/pruebaN">
          <PaginaPrueba />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
