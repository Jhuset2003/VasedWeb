import React from 'react'
import recoCss from './styles/FormOfRecovering.module.css';
import inputCss from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';
import fondo from '../../assests/fondo.jpg'

const FormOfRecovering = () => {
  return (
    <div className={recoCss.container} style={{backgroundImage: `url(${fondo})`}}>
        <div className={recoCss.recoverView}>
            <h3 className={recoCss.recoverTitle}>Recuperar Contraseña</h3>
            <div className={recoCss.formFiel}>
                <h3 className={recoCss.formFielTitle}>Introduce tu correo electrónico</h3>
                <input type="email" className={inputCss.purpleInput} placeholder="Correo@ejemplo.com"/>
            </div>
            <div className={recoCss.BtnContainer}>
                <button className={btn.BtnPurple}>Enviar</button>
                <button className={btn.BtnPink}>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default FormOfRecovering