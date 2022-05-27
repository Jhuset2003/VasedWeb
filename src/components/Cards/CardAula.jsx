import React, { useContext, useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import btn from "../../styles/Buttons.module.css";
import cardCss from "./styles/CardAula.module.css";
import { FaTimes } from "react-icons/fa";

import MiniCardActivity from "./MiniCardActivity";
import ProgressBar from "./ProgressBar";
import { UserContext } from "../../context/GlobalContext";

const CardAula = ({ aulas }) => {
  const [expand, setExpand] = useState(false);

  const { user } = useContext(UserContext);

  return (
    <div className={cardCss.card} key={aulas.id}>
      <div className={cardCss.content}>
        <div className={cardCss.bgBox}>
          <div className={cardCss.textBox}>
            <h1>{aulas.name}</h1>
            <p>{aulas.code}</p>
          </div>

          {user.role === 3 ? (
            <div className={cardCss.bar}>
              <ProgressBar percentage={aulas.progress} />
            </div>
          ) : null}

          {user.role === 1 ? (
            <div className={cardCss.btns}>
              <button className={btn.BtnWhite}>Editar</button>
              <button className={btn.BtnDelete}>Eliminar</button>
            </div>
          ) : null}
        </div>
        <div className={cardCss.textContent}>
          <div className={cardCss.text}>
            <p>{aulas.description}</p>

            {user.role === 1 && (
              <p>
                <span style={{fontSize: "20px"}}><strong>Administrador descripción</strong></span> <br /> <br />
                {aulas.adminDescription}
              </p>
            )}

            <span>
              <strong>Capacidad: {aulas.capability}</strong>
            </span>
          </div>

          {user.role === 3 ? (
            <div className={cardCss.barlaptop}>
              <ProgressBar percentage={aulas.progress} />
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
              {aulas.tasks.map((task) => (
                <MiniCardActivity task={task} />
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
                      {aulas.teachers.map((teacher) => (
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
                    {aulas.students.map((student) => (
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
