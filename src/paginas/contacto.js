import React from "react";

//Importo componentes
import FormularioContacto from "../Componentes/formContacto";
import BloqueNumeros from "../Componentes/ComponentesPlanos/bloqueNumeros";
import BloqueRedes from "../Componentes/ComponentesPlanos/bloqueRedes";

//TODO: ver de agregar algun sticker junto con los estilos y ponerlo primero en movil, para que sea mas amigable
//TODO: ponerle un titulo al formulario
//TODO: ponerle un borde al container completo si es md
//TODO: acomodar el orden de los elementos en XS

/*Ver como llevar a cabo bien el tema de las divumnas en  */

const Contacto = () => {
  return (
    <div
      className="container container-fluid containter-md my-md-5
     p-3 border border-md-secondary shadow bg-white rounded"
    >
      <div className="row mx-0">
        <section className="col col-md-6">
          <div
            className="container m-0 my-3 p-4 border 
          border-secondary rounded d-flex flex-column"
          >
            <h3 className="pb-2">Contacto</h3>
            <p className="text-muted">
              <small>
                Si te interesa que nos pusieramos en contacto con vos
              </small>
            </p>
            <div className="px-2">
              <FormularioContacto />
            </div>
          </div>
        </section>
        <section className="d-flex col col-md-4 mx-md-auto px-md-auto">
          <div className="container d-flex flex-column justify-content-center">
            <div
              style={{
                height: "10rem",
                width: "10rem",
                backgroundColor: "	#ffdb7b",
              }}
            ></div>
            <BloqueNumeros />
            <BloqueRedes />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
