import React from 'react'
import '../../styles/Inputs.css';
import './FormLogin.css';
import '../../styles/Buttons_module.css';
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
        <div className="form-container">
            <h1 className="form-title">Iniciar sesión</h1>
                <form action="" className="form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <label htmlFor="user" className="form-subtitle">Usuario</label>
                        <input 
                        type="text" 
                        id="user" 
                        name="user" 
                        placeholder="Christian Ruiz"
                        value={values.user}
                        className="purple-input"
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {touched.user && errors.user && <div className="errors">{errors.user}</div>}
                    </div>

                    <div className="form-item">
                        <label htmlFor="password" className="form-subtitle">Contraseña</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Contraseña123..."
                        value={values.password}
                        className="purple-input"
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
                    </div>
                    <button 
                    type="submit" 
                    className='BtnPurple'>Entrar</button>
                </form> 
                <a href="#" className="form-recover">¿Olvidaste tu contraseña?</a>
        </div>
      )}
    </Formik>
  </>
  )
}

export default FormLogin