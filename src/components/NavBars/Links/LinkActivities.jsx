import React from 'react'
import {NavLink} from "react-router-dom"
import actividades from "../../../assests/Iconos-menu/actividades.svg"
import navStyles from"../NavStyles/NavbarStyles.module.css"


function LinkActivities() {
  return (
    <div className={navStyles.Links}>
        <NavLink className={navStyles.navlink} to="/actividades">
            <img src={actividades} alt="" />
            <p>Actividades</p>
        </NavLink>
    </div>
  )
}

export default LinkActivities