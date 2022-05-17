import React from 'react'
import {NavLink} from "react-router-dom"
import home from "../../../../assests/Iconos-menu/inicio.svg"
import "../../NavStyles/NavbarStyles.css"

function LinkHome() {
  return (
    <div className='Links'>
        <NavLink to="/">
            <img src={home} alt="" />
            <p>Inicio</p>
        </NavLink>
    </div>
  )
}

export default LinkHome