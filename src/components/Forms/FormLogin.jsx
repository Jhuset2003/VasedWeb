import React from 'react'
import '../../styles/Inputs.css';
import './FormLogin.css';
import '../../styles/Buttons_module.css';
import { Formik } from 'formik';

const FormLogin = () => {
  return (
    <>
    <Formik
    validate={(valores) =>{
      let errores = {};

      if(!valores.user){
        errores.user = 'Por favor, ingresa un nombre'
      }
      return errores;
    }}
    onSubmit={()=>{
      console.log("formulario enviado") 
    }}>
      {( {handleSubmit, errors, handleChange, handleBlur} ) => (
        <div className="form-container">
            <h1 className="form-title">Iniciar sesión</h1>
                <form action="" className="form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <label htmlFor="user" className="form-title">Usuario</label>
                        <input 
                        type="text" 
                        id="user" 
                        name="user" 
                        placeholder="Barbablanca"
                        className="purple-input"
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {errors.user && <div>{errors.user}</div>}
                    </div>

                    <div className="form-item">
                        <label htmlFor="password" className="form-title">Contraseña</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Contraseña123..."
                        className="purple-input"
                        onChange={handleChange}
                        onBlur={handleBlur}/>
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