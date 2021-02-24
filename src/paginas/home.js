import React from "react";

import CarouselImagenes from "../Componentes/carousel";
import NuestrosProductos from "../Componentes/nuestrosProductos";
import Personalizado from "../Componentes/personalizado";
import Promociones from "../Componentes/promociones";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <section>
        <CarouselImagenes />
      </section>
      <section>
        <NuestrosProductos />
      </section>
      <section className="container-fluid m-0 mt-3 p-0">
        <Personalizado />
      </section>
      <section>
        <Promociones />
      </section>
    </div>
  );
};

export default Home;
