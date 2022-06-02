//components
import ModalLayout from '../../layout/ModalLayout'

//styles
import btn from '../../styles/Buttons.module.css'
import cardActivity from './styles/CardActividad.module.css'
import {VscChevronDown, VscChevronUp} from 'react-icons/vsc'
import {FaTimes} from 'react-icons/fa'

//react
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { SessionContext } from "../../context/SessionContext";
import { GlobalContext } from "../../context/GlobalContext";
import { deleteTask } from '../../services/task'
import FormActivities from '../Forms/FormActivities'

const CardActivity = ({ task }) => {
  //estado para mostrar contenido de tarea
  const [expand, setExpand] = useState(false);

  //estados modal
  const [modalTask, setModalTask] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  //context
  const { user } = useContext(SessionContext);
  const { dispatch } = useContext(GlobalContext);

  const data = 0;

  const handleDelete = async() => {
    const resp = await deleteTask(task.id);
    console.log(resp)
    if(resp.status !== 200 && resp.status !== 204){
      console.log('error')
      return
    }
    dispatch({
      type: "DELETE_TASK",
      payload: task.id
    })
  }

  return (
    <motion.div >
        <div className={cardActivity.card} >
            <div className={cardActivity.content} >
                <div className={cardActivity.bgBox}>
                    <div className={cardActivity.textBox}>
                        <h1>{task.name}</h1>
                        <p>{task.code}</p>
                    </div>

                    {user.role === 3 ?
                        <div className={cardActivity.circleNote}>
                            <span>5/{task.baseScore}</span>
                        </div>
                    :null}
                    
                    {user.role === 1 || user.role === 2 ?
                        <div className={cardActivity.btns}>
                            <button 
                            onClick={() => setModalEdit(!modalEdit)}
                            className={btn.BtnWhite}>
                              Editar
                            </button>

                            <button 
                            onClick={handleDelete}
                            className={btn.BtnDelete}>
                              Eliminar
                            </button>
                        </div>
                    :null}

                    {user.role === 3 ?
                        <div className={cardActivity.btns}>
                            <button 
                            type='submit' 
                            className={btn.BtnDark} 
                            onClick={()=> setModalTask(!modalTask)}>Entregar</button>{/* desarrollar la modal apartir de aquí */}
                        </div>
                    :null}

                </div>
                <div className={cardActivity.textContent}>
                    <div className={cardActivity.text}>
                        <span>Fecha: 20/05/2020</span>

                        <span><strong>Limite: 20/03/2020</strong></span>
                    </div>
                    
                    {user.role === 1 || user.role === 2 ?
                        <div className={cardActivity.note}>
                            <span>Nota Base: {task.baseScore}</span>
                        </div>
                    :null}

                    {user.role === 3 ?
                        <div className={cardActivity.circleNoteLaptop}>
                            <span>5/{task.baseScore}</span>
                        </div>
                    :null}

                    <i className={cardActivity.icon} onClick={()=> setExpand(!expand)}>{expand ? <VscChevronUp/> : <VscChevronDown/>}</i>
                </div>
            </div>

        {expand && (
          <div className={cardActivity.expand} >
            <div className={cardActivity.activities}>
              <div className={cardActivity.actTop}>
                <h2>{task.name}</h2>
              </div>
              <div className={cardActivity.taskDescrip}>
                <p>
                  {task.description}
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
                      {/* {activity.users.students.map((student) => (
                        <span key={student.id} className={cardActivity.boxUser}>
                          {student.name} <FaTimes className={cardActivity.iconBox} />
                        </span>
                      ))} */}
                      <span className={cardActivity.boxUser}>
                          name <FaTimes className={cardActivity.iconBox} />
                      </span>
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
                    {/* {task.users.teachers.map((teacher) => (
                        <span key={teacher.id} className={cardActivity.boxUser}>
                          {teacher.name} <FaTimes className={cardActivity.iconBox} />
                        </span>
                      ))} */}
                      <span className={cardActivity.boxUser}>
                          name <FaTimes className={cardActivity.iconBox} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className={cardActivity.modalContainer}>

        {/* <ModalLayout title="Editar Actividad" setOpenModal={setModalEdit} openModal={modalEdit} icon="show">
          <FormActivities/>
        </ModalLayout>

        <ModalLayout setOpenModal={setModalTask} openModal={modalTask}>
          <h1>Hacer entrega</h1>
          <div className={cardActivity.textareaTitle}>
              <h4>Entrega</h4>
              <textarea cols="70" rows="10" className={cardActivity.textarea}></textarea>
          </div>
          <div className={cardActivity.btnContainer}>
              <button className={btn.BtnPink}>Enviar</button>
              <button className={btn.BtnPurple}>Cancelar</button>
          </div>
        </ModalLayout> */}

      </div>
    </motion.div>
  );
};

export default CardActivity;
