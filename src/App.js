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
import PiePagina from "./Componentes/footer/piePagina";

//importo pagina de pruebas
import PaginaPrueba from "./paginasPrueba/categoriaN";

//TODO: una vez listo el tema de las paginas de prueba borrar el import y el camino hacia estas
//TODO: Agrandar foto del icono en la barra de pestañas

/*COMENTARIO de ESTADO:
Arreglar la carga a firebase database para que esten los links, no las
 referencias a las imagenes
Editar Bootstrap para poner colores personalizados
Ver de mejorar la barra de navegacion
Como lograr la paginacion de los stickers
Ver como construir la pagina que muestra los stickers, para que tambien
muestre las otras categorias posibles, al estilo de la doc de bootstrap
Necesito formatear bien las presentaciones
Optimizar tamaño imagenes y subirlas
Sacar de donde corresponda para las distintas aplicaciones
Armar la presentacion de una categoria especial
Terminar Home page
Terminar pagina Not found
 */

const App = () => {
  return (
    <div
      className="d-flex container flex-column mh-100 mw-100
     m-0 p-0 vh-100 align-content-between"
    >
      <Router>
        <header>
          <Navegacion />
        </header>
        <main className="flex-fill">
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
        </main>
        <footer>
          <PiePagina />
        </footer>
      </Router>
    </div>
  );
};

export default App;
