import React from 'react'
import {NavLink} from "react-router-dom"
import aulas from "../../../../assests/Iconos-menu/aulas.svg"
import navStyles from"../../NavStyles/NavbarStyles.module.css"

function LinkClassrooms() {
  return (
    <div className={navStyles.Links}>
        <NavLink className={navStyles.navlink} to="/aulas">
            <img src={aulas} alt="" />
            <p>Aulas</p>
        </NavLink>
    </div>
  )
}

export default LinkClassrooms