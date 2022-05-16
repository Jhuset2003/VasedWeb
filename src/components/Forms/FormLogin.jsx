import React from 'react'
import '../../styles/Inputs.css';
import './FormLogin.css';
import '../../styles/Buttons_module.css';

const FormLogin = () => {
  return (
    <div className="form-container">
            <form action="" className="form">
                <div className="form-item">
                    <label htmlFor="userName">Usuario</label>
                    <input 
                    type="text" 
                    id="userName" 
                    name="userName" 
                    placeholder="Barbablanca"
                    className="purple-input"/>
                </div>

                <div className="form-item">
                    <label htmlFor="">Contraseña</label>
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
    </div>
  )
}

export default FormLogin