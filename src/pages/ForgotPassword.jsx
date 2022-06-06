import React, { useState} from 'react'
import recoCss from '../components/Forms/styles/FormOfRecovering.module.css';
import inputCss from '../styles/Inputs.module.css';
import btn from '../styles/Buttons.module.css';
import formCss from '../components/Forms/styles/FormLogin.module.css'; 
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { forgotPassword } from '../services/users';

const ForgotPassword = () => {

  const handleSubmitCustom = async (values) => {
    const resp = await forgotPassword(values.email)
    console.log(resp)
    if (resp.status !== 200 && resp.status !== 204) {
      console.log("error")
      return
    }

  }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}>
      <Formik
      initialValues={{
      email: ""
    }}

    onSubmit={(values)=>{
      handleSubmitCustom(values)
      console.log("formulario enviado") 
      console.log(values)
    }}
    
    validate={(valores) =>{
      let errores = {};

      if(!valores.email){
        errores.email = 'Ingrese un correo'
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
                      {touched.email && errors.email && <div className={recoCss.errors}>{errors.email}</div>}
                  </div>
                  <div className={recoCss.BtnContainer}>

                    <button 
                    type="submit" 
                    className={btn.BtnPurple}>
                      Enviar
                    </button>

                    <Link to="/login">
                      <button className={btn.BtnPink}>Regresar</button>
                    </Link>
                    <Link to="/reset-password">
                      <button className={btn.BtnPink}>desar</button>
                    </Link>

                  </div>
                </form>
            </div>
        </div>
      )}
      </Formik>

      
    </motion.div>
  )
}

export default ForgotPassword