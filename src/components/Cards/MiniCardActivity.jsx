import React from 'react'
import btn from '../../styles/Buttons.module.css'
import card from './styles/MiniCardActivity.module.css'

const MiniCardActivity = ({user}) => {

  console.log(user)
  return (
    <>
    <div className={card.container}>

    <div className={card.cardTop}></div>
        <div className={card.text}>
            <span>Actividad 46434</span>

            {user.role === 3 ? 
              <span><strong>Entrega:</strong> 12/03/2020</span>
            : null}

            <span><strong>Limite:</strong> 25/04/2020</span>

            {user.role === 3 ? 
              <span><strong>Calificación:</strong> -</span>
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