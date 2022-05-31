import React, { useContext } from "react";
import formCss from "./styles/FormLogin.module.css";
import input from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";
import { Formik } from "formik";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../../services/login";
import { SessionContext } from "../../context/SessionContext";

const FormLogin = () => {
    const { user, setUser } = useContext(SessionContext);
    const navigate = useNavigate();

    const handleSubmitCustom = async (values) => {
        const { email, password } = values;
        const response = await login(email, password);
        if (response.status === 200) {
            setUser(response.data.user);
            navigate("/");
        };

        if(response.status === 400){
            alert("Usuario o contraseña incorrectos");
        }

        console.log(response.data);
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    //Validación del nombre de usuario
                    if (!valores.email) {
                        errores.email = "Ingresa un nombre";
                    }
                    //Validación de contraseña
                    if (!valores.password) {
                        errores.password = "Ingresa una contraseña";
                    }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    handleSubmitCustom(valores);
                    console.log(valores)
                    console.log("formulario enviado");
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
                    <div className={formCss.formContainer}>
                        <h1 className={formCss.formTitle}>Iniciar sesión</h1>
                        <form
                            action=""
                            className={formCss.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={formCss.formItem}>
                                <label
                                    htmlFor="email"
                                    className={formCss.formSubtitle}
                                >
                                    Usuario
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="example@correo.com"
                                    value={values.email}
                                    className={input.purpleInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && (
                                    <div className={formCss.errors}>
                                        {errors.email}
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
                                    className={input.purpleInput}
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
