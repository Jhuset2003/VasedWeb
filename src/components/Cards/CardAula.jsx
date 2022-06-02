import React, { useContext, useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import btn from "../../styles/Buttons.module.css";
import cardCss from "./styles/CardAula.module.css";
import { FaTimes } from "react-icons/fa";

import MiniCardActivity from "./MiniCardActivity";
import ProgressBar from "./ProgressBar";
import { SessionContext } from "../../context/SessionContext";
import { GlobalContext } from "../../context/GlobalContext";
import { deleteClassroom } from "../../services/classrooms";

const CardAula = ({ classroom }) => {
  const [expand, setExpand] = useState(false);

  const { user } = useContext(SessionContext);
  const { dispatch } = useContext(GlobalContext);

  const handleDelete = async () => {
    const resp = await deleteClassroom(classroom.id)
    if(resp.status !== 200 && resp.status !== 204) {
      console.log("error")
      return
    }
    dispatch({
      type: "DELETE_CLASSROOM",
      payload: classroom.id,
    });
  }

  const handleEdit = () => {
    dispatch({
      type: "SET_CLASSROOM_EDITING",
      payload: classroom,
    });
  }

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
              <button onClick={handleEdit} className={btn.BtnWhite}>Editar</button>
              <button
              onClick={handleDelete} 
              className={btn.BtnDelete}>
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
                <span style={{fontSize: "20px"}}><strong>Administrador descripción</strong></span> <br /> <br />
                {classroom.adminDescription}
              </p>
            )}

            <span>
              <strong>Capacidad: {classroom.capacity}</strong>
            </span>
          </div>

          {user.role === 3 ? (
            <div className={cardCss.barlaptop}>
              <ProgressBar percentage="0" />
            </div>
          ) : null}

          <i className={cardCss.icon} onClick={() => setExpand(!expand)}>
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
                <button className={`${btn.BtnDark} ${cardCss.btnfont}`}>
                  Crear una actividad
                </button>
              ) : null}
            </div>
            <div className={cardCss.miniCards}>
              {classroom.tasks.length <= 0 && <span>No hay tareas asignadas todavia</span>}
              {classroom.tasks.map((task) => (
                <MiniCardActivity task={task} key={task.id} />
              ))}
            </div>
          </div>

          {user.role === 1 || user.role === 2 ? (
            <div className={cardCss.users}>
              {user.role === 1 ? (
                <div className={cardCss.teacher}>
                  <div className={cardCss.userTop}>
                    <h2>Profesores</h2>
                    <button className={`${btn.BtnDark} ${cardCss.btnfont}`}>
                      Agregar
                    </button>
                  </div>
                  <div className={cardCss.boxScroll}>
                    <div className={cardCss.box}>
                      {classroom.users.teachers.map((teacher) => (
                        <span key={teacher.id} className={cardCss.boxUser}>
                          {teacher.name} <FaTimes className={cardCss.iconBox} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              <div className={cardCss.student}>
                <div className={cardCss.userTop}>
                  <h2>Estudiantes</h2>
                  <button className={`${btn.BtnDark} ${cardCss.btnfont}`}>
                    Agregar
                  </button>
                </div>
                <div className={cardCss.boxScroll}>
                  <div className={cardCss.box}>
                    {classroom.users.students.map((student) => (
                      <span key={student.id} className={cardCss.boxUser}>
                        {student.name} <FaTimes className={cardCss.iconBox} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default CardAula;
