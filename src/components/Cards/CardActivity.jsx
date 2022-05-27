import React, { useContext, useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import btn from "../../styles/Buttons.module.css";
import cardActivity from "./styles/CardActividad.module.css";
import { FaTimes } from "react-icons/fa";

import { UserContext } from "../../context/GlobalContext";

const CardActivity = ({ activity }) => {
  const [expand, setExpand] = useState(false);

  const { user } = useContext(UserContext);

  const data = 0;

  return (
    <>
      <div className={cardActivity.card} key={activity.id}>
        <div className={cardActivity.content} key={activity.id}>
          <div className={cardActivity.bgBox} key={activity.id}>
            <div className={cardActivity.textBox} key={activity.id}>
              <h1>{activity.name}</h1>
              {user.role === 1 || user.role === 2 ? (
                <div>
                  {" "}
                  {data === null ? (
                    <button className={btn.BtnDark}>Asignar aula</button>
                  ) : (
                    <p>{activity.code}</p>
                  )}{" "}
                </div>
              ) : null}
            </div>

            {user.role === 3 ? (
              <div className={cardActivity.circleNote}>
                <span>5/{activity.baseScore}</span>
              </div>
            ) : null}

            {user.role === 1 || user.role === 2 ? (
              <div className={cardActivity.btns}>
                <button className={btn.BtnWhite}>Editar</button>
                <button className={btn.BtnDelete}>Eliminar</button>
              </div>
            ) : null}

            {user.role === 3 ? (
              <div className={cardActivity.btns}>
                <button className={btn.BtnDark}>Entregar</button>
              </div>
            ) : null}
          </div>
          <div className={cardActivity.textContent}>
            <div className={cardActivity.text}>
              <span>Fecha: 3/02/2020</span>

              <span>
                <strong>Limite: {activity.fecha}</strong>
              </span>
            </div>

            {user.role === 1 || user.role === 2 ? (
              <div className={cardActivity.note}>
                <span>Nota Base: {activity.baseScore}</span>
              </div>
            ) : null}

            {user.role === 3 ? (
              <div className={cardActivity.circleNoteLaptop}>
                <span>5/5</span>
              </div>
            ) : null}

            <i className={cardActivity.icon} onClick={() => setExpand(!expand)}>
              {expand ? <VscChevronUp /> : <VscChevronDown />}
            </i>
          </div>
        </div>

        {expand && (
          <div className={cardActivity.expand}>
            <div className={cardActivity.activities}>
              <div className={cardActivity.actTop}>
                <h2>Tarea 1</h2>
              </div>
              <div className={cardActivity.taskDescrip}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate odit maiores tempora laborum vitae harum aspernatur
                  perferendis reprehenderit modi, officiis nesciunt dolores, eos
                  et, veniam aperiam aliquid quidem fugit tenetur natus
                  doloremque illum eveniet voluptatem accusantium? Cumque et
                  porro sint hic doloribus maxime ducimus veniam consectetur, at
                  nemo amet quae?
                </p>
              </div>
            </div>

            {user.role === 3 ? (
              <div className={cardActivity.activities}>
                <div className={cardActivity.actTop}>
                  <h2>Feedback</h2>
                </div>
                <div className={cardActivity.taskDescrip}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate odit maiores tempora laborum vitae harum
                    aspernatur perferendis reprehenderit modi, officiis nesciunt
                    dolores.
                  </p>
                </div>
              </div>
            ) : null}

            {user.role === 1 || user.role === 2 ? (
              <div className={cardActivity.users}>
                {user.role === 1 ? (
                  <div className={cardActivity.teacher}>
                    <div className={cardActivity.userTop}>
                      <h2>Profesores</h2>
                      <button
                        className={`${btn.BtnDark} ${cardActivity.btnfont}`}
                      >
                        Agregar
                      </button>
                    </div>
                    <div className={cardActivity.boxScroll}>
                      {activity.students.map((student) => (
                        <span key={student.id} className={cardActivity.boxUser}>
                          {student.name} <FaTimes className={cardActivity.iconBox} />
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className={cardActivity.student}>
                  <div className={cardActivity.userTop}>
                    <h2>Estudiantes</h2>
                    <button
                      className={`${btn.BtnDark} ${cardActivity.btnfont}`}
                    >
                      Agregar
                    </button>
                  </div>
                  <div className={cardActivity.boxScroll}>
                    <div className={cardActivity.box}>
                    {activity.teachers.map((teacher) => (
                        <span key={teacher.id} className={cardActivity.boxUser}>
                          {teacher.name} <FaTimes className={cardActivity.iconBox} />
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
    </>
  );
};

export default CardActivity;
