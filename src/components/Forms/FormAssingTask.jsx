import React, { useContext, useEffect, useState } from "react";
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { RiAddFill } from "react-icons/ri";
import Select from "react-select";
import { assignTaskToUser } from "../../services/classrooms";
import { GlobalContext } from "../../context/GlobalContext";

const FormAssingTask = ({classroom, task, usersList, setUsersList}) => {

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
        const userAssigned = users.find(user => user.id === assign);
        setUsersList([...usersList, userAssigned])

    };

    const handleChange = (e) => {
        setAssing(e.value);
    };

    useEffect(() => {
        // students in classroom.users.students that are not in usersList
        const students = classroom.users.students.filter(
            (student) => !usersList.some((user) => user.id === student.id)
        )
        setUserStudent(students);
        
    },[classroom, usersList])

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
