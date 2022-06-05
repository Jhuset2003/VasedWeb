import React from 'react'
import styleForm from "./styles/FormUsers.module.css";
import input from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";
import { Formik } from "formik";

const FormAnswer = () => {
  return (
    <div>
        <Formik
                initialValues={{
                    answer: "",
                    file: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.answer) {
                        errores.answer = "Ingrese una respuesta";
                    }

                    if (!valores.file) {
                        errores.file = "Selecione un archivo";
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
                                    htmlFor="answer"
                                    className={styleForm.formSubtitle}
                                >
                                    Respuesta
                                </label>
                              
                                <textarea
                                    id="answer"
                                    name="answer"
                                    cols="10"
                                    rows="5"
                                    placeholder="Escriba su respuesta"
                                    className={input.purpleInput}
                                    value={values.answer}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {touched.answer && errors.answer && (
                                    <div className={styleForm.errors}>
                                        {errors.answer}
                                    </div>
                                )}
                            </div>

                            <div className={styleForm.formItem}>
                                <label
                                    htmlFor="file"
                                    className={styleForm.formSubtitle}
                                >
                                    Subir Documento
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    placeholder="Documento"
                                    className={styleForm.fileInput}
                                    value={values.file}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.file && errors.file && (
                                    <div className={styleForm.errors}>
                                        {errors.file}
                                    </div>
                                )}
                            </div>
                            <button type="submit" className={btn.BtnPurple}>
                                Entregar
                            </button>
                        </form>
                    </div>
                )}
            </Formik>
    </div>
  )
}

export default FormAnswer