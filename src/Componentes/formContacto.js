import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Form as FormB } from "react-bootstrap";
import * as yup from "yup";

//TODO: Ver de implementar una validacion propia, o recurrir a Formik para llevarla a cabo
//TODO: Ver como implementar MailJS para que se contacte drectamente con el mail de las chicas
//TODO: Pasasr este componente a su propia carpeta con lo encargado de Formik y EmailJS

//TODO: usar as={} para psarle a los componentes, los forms components de react-bootstrap
const FormularioContacto = () => {
  const regexNombre = /^[a-zA-Z]+$/;
  const regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/;
  const regexNumero = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  const regexTexto = /^[a-zA-Z0-9\d\s]*$/;

  const yupValid = yup.object().shape({
    nombre: yup
      .string()
      .matches(regexNombre, "Eso no parece un nombre")
      .min(2, "Muy corto! El minimo es 2 digitos")
      .max(15, "Muy largo! El maximo es 15 digitos")
      .required("Es necesario que nos dejes tu nombre!"),
    apellido: yup
      .string()
      .matches(regexNombre, "Eso no parece un apellido")
      .min(2, "Muy corto! El minimo es 2 digitos")
      .max(15, "Muy largo! El maximo es 15 digitos")
      .required("Es necesario que nos dejes tu apellido!"),
    email: yup
      .string()
      .email("Eso no parece un email")
      .matches(regexEmail, "Eso no parece un email")
      .required("Sin tu email no podemos contactarte!"),
    telefono: yup
      .string()
      .matches(regexNumero, "Eso no parece un numero de telefono"),
    texto: yup
      .string()
      .matches(regexTexto, "No ingreses caracteres especiales por favor")
      .max(500, "El maximo son 500 digitos!"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          texto: "",
        }}
        validationSchema={yupValid}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => (
          <Form>
            <div className="d-flex flex-column flex-lg-row">
              <FormB.Group className="col-lg-6 p-0 mr-1">
                <FormB.Label>Nombre</FormB.Label>
                <Field
                  className="px-auto mx-auto"
                  placeholder="nombre"
                  name="nombre"
                  type="input"
                  as={FormB.Control}
                />
                <small className="text-danger">
                  <ErrorMessage name="nombre" />
                </small>
              </FormB.Group>
              <FormB.Group className="col-lg-6 p-0 ml-1">
                <FormB.Label>Apellido</FormB.Label>
                <Field
                  className="p-auto mx-auto"
                  placeholder="apellido"
                  name="apellido"
                  type="input"
                  as={FormB.Control}
                />
                <small className="text-danger">
                  <ErrorMessage name="apellido" />
                </small>
              </FormB.Group>
            </div>
            <FormB.Group>
              <FormB.Label>Email</FormB.Label>
              <Field
                className="my-2"
                name="email"
                placeholder="email"
                type="email"
                as={FormB.Control}
              />
              <small className="text-danger">
                <ErrorMessage name="email" />
              </small>
            </FormB.Group>
            <FormB.Group>
              <FormB.Label>Telefono</FormB.Label>
              <Field
                className="my-2"
                name="telefono"
                placeholder="telefono"
                type="tel"
                as={FormB.Control}
              />
              <small className="text-danger">
                <ErrorMessage name="telefono" />
              </small>
            </FormB.Group>
            <FormB.Group>
              <FormB.Label>Iformación extra</FormB.Label>
              <Field
                className="my-2"
                name="texto"
                placeholder="Información extra"
                type="text"
                as={FormB.Control}
              />
              <small className="text-danger">
                <ErrorMessage name="texto" />
              </small>
            </FormB.Group>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormularioContacto;
