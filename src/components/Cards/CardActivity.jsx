//components
import ModalLayout from '../../layout/ModalLayout'

//styles
import btn from '../../styles/Buttons.module.css'
import cardActivity from './styles/CardActividad.module.css'
import {VscChevronDown, VscChevronUp} from 'react-icons/vsc'
import {FaTimes} from 'react-icons/fa'

//react
import { useState, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SessionContext } from "../../context/SessionContext";
import { GlobalContext } from "../../context/GlobalContext";
import { deleteTask } from '../../services/task'
import FormFeedback from '../Forms/FormFeedback'

const CardActivity = ({ task }) => {
  const [openModal, setOpenModal] = useState(false);

  //estado para mostrar contenido de tarea
  const [expand, setExpand] = useState(false);

  //context
  const { user } = useContext(SessionContext);
  const { dispatch } = useContext(GlobalContext);

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

  const handleEdit = () => {
    dispatch({
      type: "SET_TASK_EDITING",
      payload: task,
    })
  }

  return (
    <div >
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} className={cardActivity.card} >
            <div className={cardActivity.content} transition={{}}>
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
                            onClick={handleEdit}
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
                            onClick={() => setOpenModal(true)}
                            className={btn.BtnDark} 
                            >Entregar</button>
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
        
        <AnimatePresence>
        {expand && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} className={cardActivity.expand} >
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

          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>

      <ModalLayout 
        setOpenModal={setOpenModal}
        openModal={openModal}
        icon="show">
        {/* <FormFeedback /> */}
        <h1>Formulario de entrega aqui</h1>
      </ModalLayout>

    </div>
  );
};

export default CardActivity;
