import React, { useContext, useEffect, useState } from "react";
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { RiAddFill } from "react-icons/ri";
import Select from "react-select";
import { assignTaskToUser } from "../../services/classrooms";
import { GlobalContext } from "../../context/GlobalContext";

const FormAssingTask = ({classroom, task, usersList}) => {

    const { state: { users }, dispatch } = useContext(GlobalContext);

    const [assign, setAssing] = useState(null);
    const [userStudent, setUserStudent] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!assign) {
            return;
        }

        const resp = await assignTaskToUser(assign, task.task_classroom.id)
        if(resp.status !== 200 && resp.status !== 204) {
            console.log("error")
            return
        }
        console.log("resp", resp)

    };

    const handleChange = (e) => {
        setAssing(e.value);
    };

    useEffect(() => {
        //
        setUserStudent(classroom.users.students);
    },[classroom])

    console.log(userStudent)

    return (
        <>
            <section className={formaddCss.containerform}>
                <form onSubmit={handleSubmit} className={formaddCss.formulario}>
                    <div className={formaddCss.title}>
                        <h2>Asignar una actividad para estudiante</h2>

                        <label htmlFor="names">
                            <span>Selecionar estudiante</span>
                        </label>
                        <div className={formaddCss.inputicons}>
                            <Select
                                onChange={handleChange}
                                className={formaddCss.reactselectcontainer}
                                options={userStudent.map(user => ({
                                    value: user.id,
                                    label: user.names + " " + user.lastNames
                                }))}
                            />

                            <button type="submit" className={btn.BtnDark}>
                                Asignar <RiAddFill className={formaddCss.icon} />
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};
export default FormAssingTask
