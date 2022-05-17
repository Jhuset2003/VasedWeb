import React from 'react'
import {NavLink} from "react-router-dom"
import usuarios from "../../../../assests/Iconos-menu/usuarios.svg"
import "../../NavStyles/NavbarStyles.css"


function LinkUser() {
  return (
    <div className='Links'>
        <NavLink className="navlink" to="/">
            <img src={usuarios} alt="" />
            <p>Usuario</p>

        </NavLink>
    </div>
  )
}

export default LinkUser