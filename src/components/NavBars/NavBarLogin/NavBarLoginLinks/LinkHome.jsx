import React from 'react'
import {NavLink} from "react-router-dom"
import home from "../../../../assests/Iconos-menu/inicio.svg"
import navStyles from"../../NavStyles/NavbarStyles.module.css"

function LinkHome() {
  return (
    <div className={navStyles.Links}>
        <NavLink className={navStyles.navlink} to="/">
            <img src={home} alt="" />
            <p>Inicio</p>
        </NavLink>
    </div>
  )
}

export default LinkHome