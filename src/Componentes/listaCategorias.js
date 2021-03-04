import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import useFetchData from "../Hooks/hookFetchData";

const ListaCat = () => {
  const categorias = useFetchData("categorias");
  console.log(categorias);

  return (
    <div className="d-flex flex-column container my-5 py-3">
      <h3>Categorias</h3>
      <ul className="list-group px-4 my-3" style={{ listStyle: "none" }}>
        <Fragment>
          {categorias.map((cat) => {
            return (
              <LinkContainer
                to={`/productos/${cat.nombre}`}
                style={{ cursor: "pointer" }}
              >
                <li className="my-1">{cat.nombre}</li>
              </LinkContainer>
            );
          })}
        </Fragment>
      </ul>
    </div>
  );
};

export default ListaCat;
