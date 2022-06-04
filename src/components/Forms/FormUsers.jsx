//styles
import styleForm from "./styles/FormUsers.module.css";
import inputCss from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";

//react
import { useContext } from "react";
import { Formik, Field } from "formik";
import { createUser, updateUser } from "../../services/users";
import { GlobalContext } from "../../context/GlobalContext";

const FormUsers = ({ setOpenModal, openModal }) => {
  const {
    state: { userEditing },
    dispatch,
  } = useContext(GlobalContext);

  const handleSubmitCustom = async (values) => {
    const resp = await createUser(values);

    if (resp.status !== 200 && resp.status !== 204) {
      console.log("error");
      return;
    }
    dispatch({
      type: "ADD_USER",
      payload: resp.data,
    });

    setOpenModal(false);
    console.log(resp);
  };

  const handleEdit = async (values) => {
    const resp = await updateUser(values);

    if (resp.status !== 200 && resp.status !== 204) {
      console.log("error");
      return;
    }
    dispatch({
      type: "UPDATE_USER",
      payload: resp.data,
    });

    dispatch({
      type: "SET_EDITING_NULL"
    })

    console.log(resp);
  }

  return (
    <>
      <Formik
        initialValues={
          userEditing || {
            names: "",
            lastNames: "",
            email: "",
            dni: "",
            dniTypeId: "",
            birthDate: "",
            country: "",
            city: "",
            roleId: "",
          }
        }
        validate={(valores) => {
          let errores = {};

          if (!valores.names) {
            errores.names = "Ingrese nombres";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.names)) {
            errores.names = "Los nombres solo puede contener letras";
          }
          if (!valores.lastNames) {
            errores.lastNames = "Ingrese apellidos";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastNames)) {
            errores.lastNames = "Los apellidos solo puede contener letras";
          }

          if (!valores.dni) {
            errores.dni = "Ingrese un documento";
          }
          if (!valores.dniTypeId) {
            errores.dniTypeId = "Seleccione un tipo de dnio";
          }
          if (!valores.birthDate) {
            errores.birthDate = "Ingresa una fecha de nacimiento";
          }
          if (!valores.country) {
            errores.country = "Ingrese un país";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.country)) {
            errores.country = "El país solo puede contener letras";
          }
          if (!valores.city) {
            errores.city = "Ingrese un país";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.city)) {
            errores.city = "La ciudad solo puede contener letras";
          }
          if (!valores.email) {
            errores.email = "Ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "Debe contener un correo valido";
          }
          if (!valores.roleId) {
            errores.roleId = "Seleccione un rol";
          }
          return errores;
        }}
        onSubmit={(valores) => {
          if (userEditing) {
            handleEdit(valores);
          } else {
            handleSubmitCustom(valores);
          }
          console.log("Sended");
        }}
      >
        {({
          values,
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <div className={styleForm.formContainer}>
            <form className={styleForm.form} onSubmit={handleSubmit}>
              <div className={styleForm.flexItem}>
                <div className={styleForm.formItem}>
                  <label htmlFor="name" className={styleForm.formSubtitle}>
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="names"
                    name="names"
                    placeholder="Nombres"
                    className={inputCss.purpleInput}
                    value={values.names}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.names && errors.names && (
                    <div className={styleForm.errors}>{errors.names}</div>
                  )}
                </div>
                <div className={styleForm.formItem}>
                  <label htmlFor="lastnames" className={styleForm.formSubtitle}>
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="lastNames"
                    name="lastNames"
                    placeholder="Apellidos"
                    className={inputCss.purpleInput}
                    value={values.lastNames}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastNames && errors.lastNames && (
                    <div className={styleForm.errors}>{errors.lastNames}</div>
                  )}
                </div>
              </div>
              <div className={styleForm.flexItem}>
                <div className={styleForm.formItem}>
                  <label htmlFor="dni" className={styleForm.formSubtitle}>
                    Documento
                  </label>
                  <input
                    type="number"
                    id="dni"
                    name="dni"
                    placeholder="0000000"
                    className={inputCss.purpleInput}
                    value={values.dni}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.dni && errors.dni && (
                    <div className={styleForm.errors}>{errors.dni}</div>
                  )}
                </div>
                <div className={styleForm.formItem}>
                  <label htmlFor="dniTypeId" className={styleForm.formSubtitle}>
                    Tipo de documento
                  </label>
                  <Field
                    as="select"
                    name="dniTypeId"
                    className={inputCss.purpleInput}
                    value={values.dniTypeId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Tipo documento
                    </option>
                    <option value={1}>Cédula de ciudadanía </option>
                    <option value={2}>Tarjeta de identidad</option>
                    <option value={3}>Pasaporte</option>
                  </Field>
                  {touched.dniTypeId && errors.dniTypeId && (
                    <div className={styleForm.errors}>{errors.dniTypeId}</div>
                  )}
                </div>
              </div>

              <div className={styleForm.flexItem}>
                <div className={styleForm.formItem}>
                  <label htmlFor="birthDate" className={styleForm.formSubtitle}>
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    placeholder="03/06/2022"
                    className={inputCss.purpleInput}
                    value={values.birthDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.birthDate && errors.birthDate && (
                    <div className={styleForm.errors}>{errors.birthDate}</div>
                  )}
                </div>
                <div className={styleForm.formItem}>
                  <label htmlFor="email" className={styleForm.formSubtitle}>
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@correo.com"
                    className={inputCss.purpleInput}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className={styleForm.errors}>{errors.email}</div>
                  )}
                </div>
              </div>
              <div className={styleForm.flexItem}>
                <div className={styleForm.formItem}>
                  <label htmlFor="country" className={styleForm.formSubtitle}>
                    País
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="País"
                    className={inputCss.purpleInput}
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.country && errors.country && (
                    <div className={styleForm.errors}>{errors.country}</div>
                  )}
                </div>
                <div className={styleForm.formItem}>
                  <label htmlFor="city" className={styleForm.formSubtitle}>
                    Ciudad
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    className={inputCss.purpleInput}
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.city && errors.city && (
                    <div className={styleForm.errors}>{errors.city}</div>
                  )}
                </div>
              </div>
              <div className={styleForm.formItem}>
                <label htmlFor="roleId" className={styleForm.formSubtitle}>
                  Role
                </label>
                <Field
                  as="select"
                  name="roleId"
                  className={inputCss.purpleInput}
                  value={values.roleId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option disabled value="">
                    Rol
                  </option>
                  <option value={1}>Administrador</option>
                  <option value={2}>Profesor</option>
                  <option value={3}>Estudiante</option>
                </Field>
                {touched.roleId && errors.roleId && (
                  <div className={styleForm.errors}>{errors.roleId}</div>
                )}
              </div>

              <div className={styleForm.btnCenter}>
                <button
                  type="submit"
                  /* onClick={handleSubmit} */
                  className={btn.BtnPurple}
                >
                  {userEditing ? "Editar" : "Crear"}
                </button>
                <button
                  className={btn.BtnPink}
                  type="button"
                  onClick={() => setOpenModal(!openModal)}
                >
                  {" "}
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default FormUsers;
