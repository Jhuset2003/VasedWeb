import React, { useContext } from 'react'
import styleForm from "./styles/FormUsers.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import input from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";
import { Formik } from "formik";
import { createAnswer } from '../../services/task';
import { GlobalContext } from '../../context/GlobalContext';

const FormAnswer = ({answer, setAnswer, task}) => {

    const { dispatch } = useContext(GlobalContext);

    const handleSubmitCustom = async (values) => {
        const resp = await createAnswer({
            answer: values.answer,
            userTaskClassroomId: task.userTaskClassroomId,
        });
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        setAnswer(resp.data);

        dispatch({
            type: "ADD_ANSWER_TO_TASK",
            payload: {
                taskId: task.id,
                answer: resp.data,
            }
        })
    }

  return (
    <div>
        <Formik
                initialValues={{
                    answer: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.answer) {
                        errores.answer = "Ingrese una respuesta";
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
                    <div className={formaddCss.containerform}>
                        {answer ? (
                            <span>{answer.answer_text}</span>
                        ):
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

                            <button type="submit" className={btn.BtnPurple}>
                                Entregar
                            </button>
                        </form>}
                    </div>
                )}
            </Formik>
    </div>
  )
}

export default FormAnswer