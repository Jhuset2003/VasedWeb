import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import { SessionContext } from '../../context/SessionContext';
import { deleteTaskFromClassroom } from '../../services/classrooms';
import btn from '../../styles/Buttons.module.css'
import card from './styles/MiniCardActivity.module.css'
import ModalLayout from '../../layout/ModalLayout';
import FormAssingTask from '../Forms/FormAssingTask';

const MiniCardActivity = ({task, classroom }) => {

  const [openModal, setOpenModal] = useState(false);

  const { user } = useContext(SessionContext);

  const { dispatch } = useContext(GlobalContext);

  const handleDelete = async () => {
    const resp = await deleteTaskFromClassroom(task.id, classroom.id);
    if(resp.status !== 200 && resp.status !== 204) {
      console.log('error');
      return;
    }
    dispatch({
      type: 'DELETE_TASK_FROM_CLASSROOM',
      payload: {
        classroomId: classroom.id,
        taskId: task.id
      }
    })
  }

  return (
    <>
    <div className={card.container}>

    <div className={card.cardTop}></div>
        <div className={card.text}>
            <span>{task.name}</span>

            {user.role === 3 ? 
              <span><strong>Entrega:</strong> 12/03/2020</span>
            : null}

            <span><strong>Limite:</strong> 12/03/2020</span>

            {user.role === 3 ? 
              <span><strong>Calificación:</strong> 0/{task.baseScore}*</span>
            : null}
            
        </div>
        {user.role === 1 || user.role === 2 ? 
        <div className={card.btns}>
            <button 
            onClick={() => setOpenModal(true)}
            className={btn.BtnGreen}>Asignar</button>
            <button className={btn.BtnDelete}>Eliminar</button>
        </div>
        : null}

    </div>

    <ModalLayout
        color="success"
        setOpenModal={setOpenModal}
        openModal={openModal}
        icon="show"
    >
        <FormAssingTask />
    </ModalLayout>
    </>
  )
}

export default MiniCardActivity