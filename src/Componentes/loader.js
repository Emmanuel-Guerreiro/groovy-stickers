import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

//!Este comp seguro tome mas sentido con los lazy
/*TODO: ver de corregir de alguna mejor forma esto. Una solucion puede
ser usar un context con el loading y pasarlo al sticky del footer*/
//TODO: agregar otro loading en lugar del spinner triste ese

var frases = [
  "Trayendo stickers",
  "Ordenando carpetas",
  "Actividades secretas",
];

const Loader = () => {
  const [textoAnimado, setTextoAnimado] = useState();

  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    const index = random % frases.length;
    setTimeout(setTextoAnimado(frases[index]), 700);
  }, []);

  return (
    <div
      className="container d-flex flex-column justify-content-center my-5"
      style={{ height: "20rem" }}
    >
      <span className="d-flex justify-content-center my-auto">
        <Spinner animation="border" variant="dark" />
      </span>
      <h4 className="my-auto">{textoAnimado}</h4>
    </div>
  );
};

export default Loader;
