import React from 'react'
import inputCss from '../../styles/Inputs.module.css';
import formCss from './styles/FormLogin.module.css';
import btn from '../../styles/Buttons.module.css';
import { Formik } from 'formik';

const FormLogin = () => {
  return (
    <>
    <Formik
    initialValues={{
      user: "",
      password: ""
    }}
    validate={(valores) =>{
      let errores = {};

      //Validación del nombre de usuario
      if(!valores.user){
        errores.user = 'Ingresa un nombre'
      }
      //Validación de contraseña 
      if(!valores.password){
        errores.password = 'Ingresa una contraseña'
      }
      return errores;
    }}
    
    onSubmit={(valores, {resetForm})=>{
      resetForm();
      console.log("formulario enviado") 
    }}>
      {( {values, handleSubmit, errors, touched, handleChange, handleBlur} ) => (
        <div className={formCss.formContainer}>
            <h1 className={formCss.formTitle}>Iniciar sesión</h1>
                <form action="" className={formCss.form} onSubmit={handleSubmit}>
                    <div className={formCss.formItem}>
                        <label htmlFor="user" className={formCss.formSubtitle}>Usuario</label>
                        <input 
                        type="text" 
                        id="user" 
                        name="user" 
                        placeholder="Christian Ruiz"
                        value={values.user}
                        className={inputCss.purpleInput}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {touched.user && errors.user && <div className={formCss.errors}>{errors.user}</div>}
                    </div>

                    <div className={formCss.formItem}>
                        <label htmlFor="password" className={formCss.formSubtitle}>Contraseña</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Contraseña123..."
                        value={values.password}
                        className={inputCss.purpleInput}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {touched.password && errors.password && <div className={formCss.errors}>{errors.password}</div>}
                    </div>
                    <button 
                    type="submit" 
                    className={btn.BtnPurple}>Entrar</button>
                </form> 
                <a href="#" className={formCss.formRecover}>¿Olvidaste tu contraseña?</a>
        </div>
      )}
    </Formik>
  </>
  )
}

export default FormLogin