import React, { useContext, useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import btn from "../../styles/Buttons.module.css";
import cardCss from "./styles/CardAula.module.css";
import { FaTimes } from "react-icons/fa";

import MiniCardActivity from "./MiniCardActivity";
import ProgressBar from "./ProgressBar";
import { SessionContext } from "../../context/SessionContext";
import { GlobalContext } from "../../context/GlobalContext";
import {
    deleteClassroom,
    deleteUserFromClassroom,
} from "../../services/classrooms";
import ModalLayout from "../../layout/ModalLayout";
import FormAddTeacher from "../Forms/FormAddTeacher";
import FormAddStudents from "../Forms/FormAddStudents";
import FormAddActivities from "../Forms/FormAddActivities";

const CardAula = ({ classroom }) => {
    const [expand, setExpand] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [modaltask, setModalTask] = useState(false);

    const { user } = useContext(SessionContext);
    const { dispatch } = useContext(GlobalContext);

    const handleDelete = async () => {
        const resp = await deleteClassroom(classroom.id);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        dispatch({
            type: "DELETE_CLASSROOM",
            payload: classroom.id,
        });
    };

    const handleEdit = () => {
        dispatch({
            type: "SET_CLASSROOM_EDITING",
            payload: classroom,
        });
    };

    const handleDeleteTeacherFromClassroom = async (userId) => {
        const resp = await deleteUserFromClassroom(userId, classroom.id);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        dispatch({
            type: "DELETE_TEACHER_FROM_CLASSROOM",
            payload: {
                classroomId: classroom.id,
                teacherId: userId,
            },
        });
    };

    const handleDeleteStudentFromClassroom = async (userId) => {
        const resp = await deleteUserFromClassroom(userId, classroom.id);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        dispatch({
            type: "DELETE_STUDENT_FROM_CLASSROOM",
            payload: {
                classroomId: classroom.id,
                studentId: userId,
            },
        });
    };

    return (
        <div className={cardCss.card}>
            <div className={cardCss.content}>
                <div className={cardCss.bgBox}>
                    <div className={cardCss.textBox}>
                        <h1>{classroom.name}</h1>
                        <p>{classroom.code}</p>
                    </div>

                    {user.role === 3 ? (
                        <div className={cardCss.bar}>
                            <ProgressBar percentage="0" />
                        </div>
                    ) : null}

                    {user.role === 1 ? (
                        <div className={cardCss.btns}>
                            <button
                                onClick={handleEdit}
                                className={btn.BtnWhite}
                            >
                                Editar
                            </button>
                            <button
                                onClick={handleDelete}
                                className={btn.BtnDelete}
                            >
                                Eliminar
                            </button>
                        </div>
                    ) : null}
                </div>
                <div className={cardCss.textContent}>
                    <div className={cardCss.text}>
                        <p>{classroom.description}</p>

                        {user.role === 1 && (
                            <p>
                                <span style={{ fontSize: "20px" }}>
                                    <strong>Administrador descripción</strong>
                                </span>{" "}
                                <br /> <br />
                                {classroom.adminDescription}
                            </p>
                        )}

                        <span>
                            {
                                classroom.totalStudents >= classroom.capacity ? (
                                    <strong>Capacidad: {classroom.totalStudents}/{classroom.capacity}</strong>
                                ) :
                                (
                                    <strong>Capacidad: {classroom.totalStudents}/{classroom.capacity}</strong>
                                )
                            }
                        </span>
                    </div>

                    {user.role === 3 ? (
                        <div className={cardCss.barlaptop}>
                            <ProgressBar percentage="0" />
                        </div>
                    ) : null}

                    <i
                        className={cardCss.icon}
                        onClick={() => setExpand(!expand)}
                    >
                        {expand ? <VscChevronUp /> : <VscChevronDown />}
                    </i>
                </div>
            </div>

            {expand && (
                <div className={cardCss.expand}>
                    <div className={cardCss.activities}>
                        <div className={cardCss.actTop}>
                            <h2>Actividades</h2>
                            {user.role === 1 ? (
                                <button
                                    onClick={() => setModalTask(true)}
                                    className={`${btn.BtnDark} ${cardCss.btnfont}`}
                                >
                                    Asignar una actividad
                                </button>
                            ) : null}
                        </div>
                        <div className={cardCss.miniCards}>
                            {classroom.tasks.length <= 0 && (
                                <span>No hay tareas asignadas todavia</span>
                            )}
                            {classroom.tasks.map((task) => (
                                <MiniCardActivity classroom={classroom} task={task} key={task.id} />
                            ))}
                        </div>
                    </div>

                    {user.role === 1 || user.role === 2 ? (
                        <div className={cardCss.users}>
                            {user.role === 1 ? (
                                <div className={cardCss.teacher}>
                                    <div className={cardCss.userTop}>
                                        <h2>Profesores</h2>
                                        <button
                                            onClick={() => setOpenModal(true)}
                                            className={`${btn.BtnDark} ${cardCss.btnfont}`}
                                        >
                                            Agregar
                                        </button>
                                    </div>
                                    <div className={cardCss.boxScroll}>
                                        <div className={cardCss.box}>
                                            {classroom.users.teachers.map(
                                                (teacher) => (
                                                    <span
                                                        key={teacher.id}
                                                        className={
                                                            cardCss.boxUser
                                                        }
                                                    >
                                                        {teacher.names +
                                                            " " +
                                                            teacher.lastNames}{" "}
                                                        <FaTimes
                                                            onClick={() =>
                                                                handleDeleteTeacherFromClassroom(
                                                                    teacher.id
                                                                )
                                                            }
                                                            className={
                                                                cardCss.iconBox
                                                            }
                                                        />
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                            <div className={cardCss.student}>
                                <div className={cardCss.userTop}>
                                    <h2>Estudiantes</h2>
                                    <button
                                        onClick={() => setOpenModal2(true)}
                                        className={`${btn.BtnDark} ${cardCss.btnfont}`}
                                    >
                                        Agregar
                                    </button>
                                </div>
                                <div className={cardCss.boxScroll}>
                                    <div className={cardCss.box}>
                                        {classroom.users.students.map(
                                            (student) => (
                                                <span
                                                    key={student.id}
                                                    className={cardCss.boxUser}
                                                >
                                                    {student.names +
                                                        " " +
                                                        student.lastNames}{" "}
                                                    <FaTimes
                                                        onClick={() =>
                                                            handleDeleteStudentFromClassroom(
                                                                student.id
                                                            )
                                                        }
                                                        className={
                                                            cardCss.iconBox
                                                        }
                                                    />
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            )}

            <ModalLayout
                color="success"
                setOpenModal={setOpenModal}
                openModal={openModal}
                icon="show"
            >
                <FormAddTeacher classroom={classroom} />
            </ModalLayout>

            <ModalLayout
                color="success"
                setOpenModal={setOpenModal2}
                openModal={openModal2}
                icon="show"
            >
                <FormAddStudents classroom={classroom} />
            </ModalLayout>

            <ModalLayout
                color="success"
                setOpenModal={setModalTask}
                openModal={modaltask}
                icon="show"
            >
                <FormAddActivities classroom={classroom} />
            </ModalLayout>
        </div>
    );
};

export default CardAula;
