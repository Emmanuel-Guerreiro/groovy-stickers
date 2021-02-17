import React from "react";
import { Spinner } from "react-bootstrap";

/*TODO: ver de corregir de alguna mejor forma esto. Una solucion puede
ser usar un context con el loading y pasarlo al sticky del footer*/

const Loader = ({ loading }) => {
  const estilo = { height: `${loading ? "20rem" : null}` };
  return (
    <div
      className="container d-flex justify-content-center my-5"
      style={{ height: estilo.height }}
    >
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default Loader;
