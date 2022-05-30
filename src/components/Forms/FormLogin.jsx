import React, { useContext } from "react";
import formCss from "./styles/FormLogin.module.css";
import btn from "../../styles/Buttons.module.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { login } from "../../services/login";
import { SessionContext } from "../../context/SessionContext";



const FormLogin = () => {

  const { user, setUser } = useContext(SessionContext);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { email, password } = values;
    const { data } = await login(email, password);
    console.log(data);
    setSubmitting(false);
  }
  
    return (
        <>
            <Formik
                initialValues={{
                    user: "",
                    password: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    //Validación del nombre de usuario
                    if (!valores.user) {
                        errores.user = "Ingresa un nombre";
                    }
                    //Validación de contraseña
                    if (!valores.password) {
                        errores.password = "Ingresa una contraseña";
                    }
                    return errores;
                }}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    handleSubmit,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                }) => (
                    <div className={formCss.formContainer}>
                        <h1 className={formCss.formTitle}>Iniciar sesión</h1>
                        <form
                            action=""
                            className={formCss.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={formCss.formItem}>
                                <label
                                    htmlFor="user"
                                    className={formCss.formSubtitle}
                                >
                                    Usuario
                                </label>
                                <input
                                    type="text"
                                    id="user"
                                    name="user"
                                    placeholder="Christian Ruiz"
                                    value={values.user}
                                    className={formCss.purpleInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.user && errors.user && (
                                    <div className={formCss.errors}>
                                        {errors.user}
                                    </div>
                                )}
                            </div>

                            <div className={formCss.formItem}>
                                <label
                                    htmlFor="password"
                                    className={formCss.formSubtitle}
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña123..."
                                    value={values.password}
                                    className={formCss.purpleInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && (
                                    <div className={formCss.errors}>
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                                <button type="submit" className={btn.BtnPurple}>
                                    Entrar
                                </button>
                        </form>
                        <Link to="/recover" className={formCss.formRecover}>
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                )}
            </Formik>
        </>
    );
};

export default FormLogin;
