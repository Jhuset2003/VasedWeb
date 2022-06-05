import React from 'react'
import btn from '../../styles/Buttons.module.css'
import card from './styles/MiniCardActivity.module.css'

const CardDetail = ({dataCard}) => {
  return (
    <div className={card.container}>

    <div className={card.cardTop}></div>
        <div className={card.text}>
            <span>Nombre: {dataCard.name}</span>
            <span>Código: {dataCard.code}</span>
            <span>Termina: {dataCard.endsAt}</span>
        </div>

    </div>
  )
}

export default CardDetail