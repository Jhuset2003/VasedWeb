import React from 'react'
import {NavLink} from "react-router-dom"
import usuarios from "../../../../assests/Iconos-menu/usuarios.svg"
import navStyles from"../../NavStyles/NavbarStyles.module.css"


function LinkUser() {
  return (
    <div className={navStyles.Links}>
        <NavLink className={navStyles.navlink} to="/usuarios">
            <img src={usuarios} alt="" />
            <p>Usuario</p>

        </NavLink>
    </div>
  )
}

export default LinkUser