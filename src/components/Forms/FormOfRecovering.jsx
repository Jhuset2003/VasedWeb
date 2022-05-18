import React from 'react'
import recoCss from './styles/FormOfRecovering.module.css';
import inputCss from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';
import formCss from './styles/FormLogin.module.css';
import { Formik } from 'formik';


const FormOfRecovering = () => {
  return (
    <>
      <Formik
      initialValues={{
      email: ""
    }}

    onSubmit={(valores, {resetForm})=>{
      resetForm();
      console.log("formulario enviado") 
    }}
    
    validate={(valores) =>{
      let errores = {};

      //Validación de contraseña 
      if(!valores.email){
        errores.email = 'Ingresa un correo'
      }
      return errores;
    }}>

      {( {values, handleSubmit, errors, touched, handleChange, handleBlur} ) => (
        
        <div className={recoCss.container}>
            <div className={recoCss.recoverView}>
                <h3 className={recoCss.recoverTitle}>Recuperar Contraseña</h3>
                <form action="" onSubmit={handleSubmit}>
                  <div className={recoCss.formField}>
                      <h3 className={recoCss.formFieldTitle}>Introduce tu correo electrónico</h3>
                      <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className={inputCss.purpleInput} 
                      placeholder="CorreoDemo@ejemplo.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {touched.email && errors.email && <div className={formCss.errors}>{errors.email}</div>}
                  </div>
                  <div className={recoCss.BtnContainer}>
                      <button className={btn.BtnPurple}>Enviar</button>
                      <button className={btn.BtnPink}>Cancelar</button>
                  </div>
                </form>
            </div>
        </div>
      )}
      </Formik>
    </>
  )
}

export default FormOfRecovering