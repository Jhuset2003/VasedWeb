import React, { useContext } from 'react'
import { UserContext } from '../../context/GlobalContext';
import btn from '../../styles/Buttons.module.css'
import card from './styles/MiniCardActivity.module.css'

const MiniCardActivity = ({task}) => {

  const { user } = useContext(UserContext);

  return (
    <>
    <div className={card.container} key={task.id}>

    <div className={card.cardTop}></div>
        <div className={card.text}>
            <span>{task.name}*</span>

            {user.role === 3 ? 
              <span><strong>Entrega:</strong> 12/03/2020</span>
            : null}

            <span><strong>Limite:</strong> {task.fecha}</span>

            {user.role === 3 ? 
              <span><strong>Calificación:</strong> 0/{task.baseScore}*</span>
            : null}
            
        </div>
        {user.role === 1 || user.role === 2 ? 
        <div className={card.btns}>
            <button className={btn.BtnGreen}>Editar</button>
            <button className={btn.BtnDelete}>Eliminar</button>
        </div>
        : null}

    </div>
    </>
  )
}

export default MiniCardActivity