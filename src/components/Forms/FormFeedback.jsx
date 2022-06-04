import React from 'react'
import styleForm from "./styles/FormUsers.module.css";
import inputCss from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";
import { Formik } from 'formik';

const FormFeedback = ({setOpenModal, openModal}) => {
  return (
    <div className={styleForm.formFeedback}>
        <h1>Entrega -estudiante- </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis natus est sed labore voluptas soluta id incidunt, cum facere provident distinctio culpa deserunt. Illo dolor ratione consequatur aut fugit officia!</p>

        <Formik
                initialValues={{
                    score: "",
                    feedback: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    //Validación del nombre de usuario
                    if (!valores.score) {
                        errores.score = "Ingrese una calificación";
                    }
                    //Validación de contraseña
                    if (!valores.feedback) {
                        errores.feedback = "Ingrese la retroalimentación";
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
                    <div className={styleForm.formContainer}>
                        <form
                            action=""
                            className={styleForm.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={styleForm.formItem}>
                                <label
                                    htmlFor="score"
                                    className={styleForm.formSubtitle}
                                >
                                    Calificación estudiante
                                </label>
                                <input
                                    type="text"
                                    id="score"
                                    name="score"
                                    placeholder="Calificación"
                                    value={values.score}
                                    className={inputCss.purpleInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.score && errors.score && (
                                    <div className={styleForm.errors}>
                                        {errors.score}
                                    </div>
                                )}
                            </div>

                            <div className={styleForm.formItem}>
                                <label
                                    htmlFor="feedback"
                                    className={styleForm.formSubtitle}
                                >
                                    Retroalimentación
                                </label>
                                <textarea
                                    name="feeback"
                                    id="feeback"
                                    cols="10"
                                    rows="5"
                                    placeholder="Escriba aquí su retroalimentación"
                                    className={inputCss.purpleInput}
                                    value={values.feedback}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {touched.feedback && errors.feedback && (
                                    <div className={styleForm.errors}>
                                        {errors.feedback}
                                    </div>
                                )}
                            </div>
                            <div className={styleForm.btnCenter}>
                                <button type="submit" className={btn.BtnPurple}>
                                    Enviar
                                </button>
                                <button
                                    className={btn.BtnPink}
                                    onClick={() => setOpenModal(false)}
                                >
                                    {" "}
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
    </div>
  )
}

export default FormFeedback