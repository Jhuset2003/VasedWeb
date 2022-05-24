import React, { useState } from "react";
import inputCss from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormAdd = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className={formaddCss.formulario}>
            <div>
              <label htmlFor="nombre">Nombre Usuario</label>
              <Field type="text" id="nombre" name="nombre" />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>

            <div>
              <Field name="pais" as="select">
                <option value="mexico">Mexico</option>
                <option value="España">España</option>
                <option value="Argentina">Argentina</option>
              </Field>
            </div>

            <div>
              <label>
                <Field type="radio" name="sexo" value="hombre" /> Hombre
              </label>
              <label>
                <Field type="radio" name="sexo" value="mujer" /> Mujer
              </label>
            </div>

            <div>
              <Field name="mensaje" as="textarea" placeholder="Mensaje" />
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormAdd;
