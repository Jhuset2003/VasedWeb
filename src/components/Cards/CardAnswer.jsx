import React, { useContext, useState } from 'react'
import { SessionContext } from '../../context/SessionContext';
import ModalLayout from '../../layout/ModalLayout';
import btn from '../../styles/Buttons.module.css'
import card from './styles/MiniCardActivity.module.css'
import FormFeedback from '../Forms/FormFeedback';

const CardAnswer = ({answer, userAnswers, setUserAnswers}) => {

    const {user} = useContext(SessionContext);
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
        <div className={card.container}>

        <div className={card.cardTop}></div>
            <div className={card.text}>
                <span>{answer.answer_text}</span>
                <span>Calificación: {answer.score ? answer.score :  "Sin calificación" }</span>
            </div>

            {user.role === 2 && 
            <div className={card.btnscenter}>
                {answer.feedback ? <button disabled={true}
                className={btn.BtnGray}>Calificado</button>
            :<button 
            onClick={() => setOpenModal(true)}
            className={btn.BtnBlue}>Calificar</button>}
            </div>}

        </div>

        <ModalLayout
            setOpenModal={setOpenModal}
            openModal={openModal}
            icon="show">
            <FormFeedback openModal={openModal} setOpenModal={setOpenModal} answer={answer} setUserAnswers={setUserAnswers} userAnswers={userAnswers}/>
        </ModalLayout>
    </>
  )
}


export default CardAnswer