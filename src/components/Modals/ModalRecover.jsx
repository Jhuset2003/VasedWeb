import React, {useState} from 'react'
import modal from '../../styles/ModalRecover.module.css';
import { VscClose } from 'react-icons/vsc';
import btn from '../../styles/Buttons.module.css';


const ModalRecover = ({children, state, modalState}) => {

  return (
    <>
        {state &&
            <div className={modal.background}>
                <div className={modal.modalContainer}>
                    <h1 className={modal.title}>Contraseña nueva establecida con éxito</h1>
                    <button className={modal.btnClose}><VscClose/></button>
                    <button className={btn.BtnGreen}>Iniciar sesión</button>
                </div>
            </div>
        }    
    </>
  )
}

export default ModalRecover