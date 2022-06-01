import React from 'react'
import {NavLink} from "react-router-dom"
import usuarios from "../../../assests/Iconos-menu/usuarios.svg"
import navStyles from"../NavStyles/NavbarStyles.module.css"


function LinkStudents() {
  return (
    <div className={navStyles.Links}>
        <NavLink className={navStyles.navlink} to="/estudiantes">
            <img src={usuarios} alt="" />
            <p>Estudiantes</p>
        </NavLink>
    </div>
  )
}

export default LinkStudents