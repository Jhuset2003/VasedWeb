import React from 'react'
import btn from '../../styles/Buttons.module.css'
import card from './styles/MiniCardActivity.module.css'

const MiniCardActivity = () => {

  const user = {
    "id" : 1,
    "name" : "Rodrigo Vased",
    "role" : 3
  }

  return (
    <>
    <div className={card.container}>

        <div className={card.cardTop}></div>
        <div className={card.text}>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste et delectus tempore, facilis minus at quia nihil amet suscipit rerum.</span>
            <span>texto</span>
        </div>
        {user.role === 1 ? 
        <div className={card.btns}>
            <button className={btn.BtnGreen}>Editar</button>
            <button className={btn.BtnDark}>Eliminar</button>
        </div>
        : user.role === 2 ?
        <div className={card.btns}>
          <button className={btn.BtnGreen}>Editar</button>
          <button className={btn.BtnDark}>Eliminar</button>
        </div>
        : null}

    </div>
    </>
  )
}

export default MiniCardActivity