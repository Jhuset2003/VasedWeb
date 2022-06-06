import React from 'react'
import styleForm from "./styles/FormUsers.module.css";
import inputCss from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";
import { Formik } from 'formik';
import { addFeedback } from '../../services/task';

const FormFeedback = ({setOpenModal, openModal, answer}) => {


    const handleSubmitCustom = async (values) => {
        const resp = await addFeedback({
            score: Number(values.score),
            feedback: values.feedback,
            answerId: answer.id,
        });
        console.log(values);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            console.log(resp);
            return;
        }

        setOpenModal(false);
    };

  return (
    <div className={styleForm.formFeedback}>
        <h1>Entrega {answer.id}</h1>
        <p>{answer.answer_text}</p>

        <Formik
                initialValues={{
                    score: "",
                    feedback: "",
                }}
                validate={(valores) => {
                    let errores = {};
                    if (!valores.score) {
                        errores.score = "Ingrese una calificación";
                    }
                    if (!valores.feedback) {
                        errores.feedback = "Ingrese la retroalimentación";
                    }
                    return errores;
                }}
                onSubmit={(values) => {
                    handleSubmitCustom(values);
                    console.log(values)
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
                                    type="number"
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
                                    name="feedback"
                                    id="feedback"
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
                                    type="button"
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