//components
import ModalLayout from "../../layout/ModalLayout";

//styles
import btn from "../../styles/Buttons.module.css";
import cardActivity from "./styles/CardActividad.module.css";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";

//react
import { useState, useContext, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SessionContext } from "../../context/SessionContext";
import { GlobalContext } from "../../context/GlobalContext";
import { deleteTask, getAnswer } from "../../services/task";
import FormAnswer from "../Forms/FormAnswer";

const CardActivity = ({ task }) => {

  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  //estado para mostrar contenido de tarea
  const [expand, setExpand] = useState(false);
  const [answer, setAnswer] = useState(null);

  //context
  const { user } = useContext(SessionContext);
  const { dispatch } = useContext(GlobalContext);

  const handleDelete = async () => {
    const resp = await deleteTask(task.id);
    console.log(resp);
    if (resp.status !== 200 && resp.status !== 204) {
      console.log("error");
      return;
    }
    dispatch({
      type: "DELETE_TASK",
      payload: task.id,
    });
  };

  const handleEdit = () => {
    dispatch({
      type: "SET_TASK_EDITING",
      payload: task,
    });
  };

  const getAnswerFunction = async () => {
    const resp = await getAnswer(task.task_classroomId);
    if (resp.status !== 200 && resp.status !== 204) {
      console.log("error");
      return;
    }
    setAnswer(resp.data);
  };

  useEffect(() => {
    getAnswerFunction();
  }, []);
  console.log(answer);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cardActivity.card}
      >
        <div className={cardActivity.content} transition={{}}>
          <div className={cardActivity.bgBox}>
            <div className={cardActivity.textBox}>
              <h1>{task.name}</h1>
              <p>{task.code}</p>
            </div>

            {user.role === 3 ? (
              <div className={cardActivity.circleNote}>
                <span>
                  {answer ? answer.score : "-"}/{task.baseScore}
                </span>
              </div>
            ) : null}

            {user.role === 1 || user.role === 2 ? (
              <div className={cardActivity.btns}>
                <button onClick={handleEdit} className={btn.BtnWhite}>
                  Editar
                </button>

                <button onClick={setOpenDelete} className={btn.BtnDelete}>
                  Eliminar
                </button>
              </div>
            ) : null}

            {user.role === 3 ? (
              <div className={cardActivity.btns}>
                <button 
                onClick={() => setOpenModal(true)}
                className={btn.BtnDark}>
                  {answer ? "Ver respuesta" : "Responder"}
                </button>
                {/* desarrollar la modal apartir de aquí */}
              </div>
            ) : null}
          </div>
          <div className={cardActivity.textContent}>
            <div className={cardActivity.text}>
              <span>Fecha: 20/05/2020</span>

              <span>
                <strong>Limite: 20/03/2020</strong>
              </span>
            </div>

            {user.role === 1 || user.role === 2 ? (
              <div className={cardActivity.note}>
                <span>Nota Base: {task.baseScore}</span>
              </div>
            ) : null}

            {user.role === 3 ? (
              <div className={cardActivity.circleNoteLaptop}>
                <span>
                  {answer?.score || "-"}/{task.baseScore}
                </span>
              </div>
            ) : null}

            <i className={cardActivity.icon} onClick={() => setExpand(!expand)}>
              {expand ? <VscChevronUp /> : <VscChevronDown />}
            </i>
          </div>
        </div>

        <AnimatePresence>
          {expand && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cardActivity.expand}
            >
              <div className={cardActivity.activities}>
                <div className={cardActivity.actTop}>
                  <h2>{task.name}</h2>
                </div>
                <div className={cardActivity.taskDescrip}>
                  <p>{task.description}</p>
                </div>
              </div>
              {user.role === 3 ? (
                <div className={cardActivity.activities}>
                  <div className={cardActivity.actTop}>
                    <h2>Feedback</h2>
                  </div>
                  <div className={cardActivity.taskDescrip}>
                    <p>{answer?.feedback || "No hay feedback"}</p>
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <ModalLayout
        title="Formulario entregar respuesta"
        setOpenModal={setOpenModal}
        openModal={openModal}
        icon="show"
        color="success"
        
      >
        <FormAnswer answer={answer} setAnswer={setAnswer} task={task}/>

      </ModalLayout>

      <ModalLayout
        setOpenModal={setOpenDelete}
        openModal={openDelete}
        color="error"
        
      >
        <p>¿Estas seguro de eliminar esta tarea?</p>

        <div className={cardActivity.btns}>
          <button onClick={handleDelete} className={btn.BtnDelete}>
            Eliminar
          </button>
          <button onClick={() => setOpenDelete(false)} className={btn.BtnPurple}>
            Cancelar
          </button>
        </div>

      </ModalLayout>
    </div>
  );
};

export default CardActivity;
