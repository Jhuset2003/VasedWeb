import React from 'react'
import btn from '../../styles/Buttons.module.css'
import card from './styles/MiniCardActivity.module.css'

const MiniCardActivity = () => {
  return (
    <>
    <div className={card.container}>

        <div className={card.cardTop}></div>
        <div className={card.text}>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste et delectus tempore, facilis minus at quia nihil amet suscipit rerum.</span>
            <span>texto</span>
        </div>
        <div className={card.btns}>
            <button className={btn.BtnGreen}>Editar</button>
            <button className={btn.BtnDark}>Eliminar</button>
        </div>

    </div>
    </>
  )
}

export default MiniCardActivity