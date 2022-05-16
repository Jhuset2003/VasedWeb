import React from 'react'
import '../../styles/Inputs.css';
import './FormLogin.css';
import '../../styles/Buttons_module.css';

const FormLogin = () => {
  return (
    <div className="form-container">
        <h1 className="form-title">Iniciar sesión</h1>
            <form action="" className="form">
                <div className="form-item">
                    <label htmlFor="" className="form-title">Usuario</label>
                    <input 
                    type="text" 
                    id="userName" 
                    name="userName" 
                    placeholder="Barbablanca"
                    className="purple-input"/>
                </div>

                <div className="form-item">
                    <label htmlFor="" className="form-title">Contraseña</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Contraseña123..."
                    className="purple-input"/>
                </div>
                <button 
                type="submit" 
                className='BtnPurple'>Entrar</button>
            </form> 
            <h3 className="form-recover">¿Olvidaste tu contraseña?</h3>
    </div>
  )
}

export default FormLogin