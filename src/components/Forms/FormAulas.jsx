import styleForm from "./styles/FormUsers.module.css";
import inputCss from "../../styles/Inputs.module.css";
import btn from "../../styles/Buttons.module.css";
import { Formik } from "formik";
import { createClassroom, updateClassroom } from "../../services/classrooms";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const FormAulas = ({ setOpenModal, openModal }) => {
    const {
        state: { classroomEditing },
        dispatch,
    } = useContext(GlobalContext);

    const handleSubmitCustom = async (values) => {
        const resp = await createClassroom(values);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        console.log(resp);
        dispatch({
            type: "ADD_CLASSROOM",
            payload: {
                ...resp.data,
                tasks: [],
                users: {
                    teachers: [],
                    students: [],
                },
                totalStudents: 0,
            },
        });

        setOpenModal(false);
        console.log(resp);
    };

    const handleSubmitEdit = async (values) => {
        const resp = await updateClassroom(values);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        console.log(values);

        setOpenModal(false);

        dispatch({
            type: "UPDATE_CLASSROOM",
            payload: {
                ...resp.data,
                tasks: [],
                users: {
                    teachers: [],
                    students: [],
                },
            },
        });

        dispatch({
            type: "SET_EDITING_NULL",
        });
    };

    return (
        <>
            <Formik
                initialValues={
                    classroomEditing || {
                        name: "",
                        capacity: "",
                        code: "",
                        endsAt: "",
                        description: "",
                        adminDescription: "",
                    }
                }
                validate={(valores) => {
                    let errores = {};

                    if (!valores.name) {
                        errores.name = "Ingrese nombres";
                    }
                    if (!valores.capacity) {
                        errores.capacity = "Ingrese capacidad";
                    }

                    if (!valores.code) {
                        errores.code = "Ingrese un c??digo";
                    }
                    if (!valores.endsAt) {
                        errores.endsAt = "Seleccione un fecha";
                    }
                    if (!valores.description) {
                        errores.description = "Ingrese una descripci??n";
                    }
                    if (!valores.adminDescription) {
                        errores.adminDescription = "Ingrese una descripci??n";
                    }
                    return errores;
                }}
                onSubmit={(valores) => {
                    console.log("send");
                    console.log(valores);
                    if (classroomEditing) {
                        handleSubmitEdit(valores);
                    } else {
                        handleSubmitCustom(valores);
                    }
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
                            className={styleForm.form}
                            onSubmit={handleSubmit}
                        >

                            <div className={styleForm.flexItem}>
                                <div className={styleForm.formItem}>
                                    <label
                                        htmlFor="name"
                                        className={styleForm.formSubtitle}
                                    >
                                        Nombre Aula
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Aula 1"
                                        className={inputCss.purpleInput}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.name && errors.name && (
                                        <div className={styleForm.errors}>
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className={styleForm.formItem}>
                                    <label
                                        htmlFor="endsAt"
                                        className={styleForm.formSubtitle}
                                    >
                                        Fecha terminaci??n
                                    </label>
                                    <input
                                        type="date"
                                        id="endsAt"
                                        name="endsAt"
                                        placeholder="20/03/2023"
                                        className={inputCss.purpleInput}
                                        value={values.endsAt}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.endsAt && errors.endsAt && (
                                        <div className={styleForm.errors}>
                                            {errors.endsAt}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styleForm.flexItem}>
                                <div className={styleForm.formItem}>
                                    <label
                                        htmlFor="capacity"
                                        className={styleForm.formSubtitle}
                                    >
                                        Capacidad maxima
                                    </label>
                                    <input
                                        type="number"
                                        id="capacity"
                                        name="capacity"
                                        placeholder="100"
                                        className={inputCss.purpleInput}
                                        value={values.capacity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.capacity && errors.capacity && (
                                        <div className={styleForm.errors}>
                                            {errors.capacity}
                                        </div>
                                    )}
                                </div>
                                <div className={styleForm.formItem}>
                                    <label
                                        htmlFor="code"
                                        className={styleForm.formSubtitle}
                                    >
                                        C??digo
                                    </label>
                                    <input
                                        type="number"
                                        id="code"
                                        name="code"
                                        placeholder="10101"
                                        className={inputCss.purpleInput}
                                        value={values.code}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.code && errors.code && (
                                        <div className={styleForm.errors}>
                                            {errors.code}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styleForm.formItem}>
                                <label
                                    htmlFor="description"
                                    className={styleForm.formSubtitle}
                                >
                                    Descripci??n
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    cols="10"
                                    rows="5"
                                    placeholder="..."
                                    className={inputCss.purpleInput}
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {touched.description && errors.description && (
                                    <div className={styleForm.errors}>
                                        {errors.description}
                                    </div>
                                )}
                            </div>
                            <div className={styleForm.formItem}>
                                <label
                                    htmlFor="adminDescription"
                                    className={styleForm.formSubtitle}
                                >
                                    Descripci??n Administrador
                                </label>
                                <textarea
                                    name="adminDescription"
                                    id="adminDescription"
                                    cols="10"
                                    rows="5"
                                    placeholder="..."
                                    className={inputCss.purpleInput}
                                    value={values.adminDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {touched.adminDescription &&
                                    errors.adminDescription && (
                                        <div className={styleForm.errors}>
                                            {errors.adminDescription}
                                        </div>
                                    )}
                            </div>
                            <div className={styleForm.btnCenter}>
                                <button type="submit" className={btn.BtnPurple}>
                                    {classroomEditing ? "Editar" : "Crear"}
                                </button>
                                <button
                                    className={btn.BtnPink}
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

export default FormAulas;
