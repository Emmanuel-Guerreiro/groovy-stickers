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
Logrado conseguir las imagenes de una "carpeta" de storage. 
Necesito formatear bien las presentaciones
Optimizar tamaño imagenes y subirlas
Sacar de donde corresponda para las distintas aplicaciones
Armar la presentacion de una categoria especial
Armar la presentacion (mas detalles) de un sticker
Modificar de manera dinamica la posicion del footer en las distintas paginas
con un estado en App que sea prop de footer y las distintas paginas donde haya que cargar cosas
Armar "Como-comprar"
Terminar Home page
Terminar la funcionalidad del form en Contacto
 */

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
      <PiePagina />
    </Router>
  );
};

export default App;
