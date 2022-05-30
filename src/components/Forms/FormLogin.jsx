import React from 'react'
import formCss from './styles/FormLogin.module.css';
import input from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

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
        errores.user = 'Ingrese un correo'
      }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
        errores.user = "Ingrese un correo valido"
      }
      //Validación de contraseña 
      if(!valores.password){
        errores.password = 'Ingrese una contraseña'
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
                        type="email" 
                        id="user" 
                        name="user" 
                        placeholder="example@correo.com"
                        value={values.user}
                        className={input.purpleInput}
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
                        className={input.purpleInput}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {touched.password && errors.password && <div className={formCss.errors}>{errors.password}</div>}
                    </div>
                    <Link to="/">
                      <button 
                      type="submit" 
                      className={btn.BtnPurple}>Entrar</button>
                    </Link>
                </form> 
                <Link to="/recover" className={formCss.formRecover}>¿Olvidaste tu contraseña?</Link>
        </div>
      )}
    </Formik>
  </>
  )
}

export default FormLogin