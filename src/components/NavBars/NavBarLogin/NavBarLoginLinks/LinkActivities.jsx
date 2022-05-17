import React from 'react'
import {NavLink} from "react-router-dom"
import actividades from "../../../../assests/Iconos-menu/actividades.svg"
import "../../NavStyles/NavbarStyles.css"


function LinkActivities() {
  return (
    <div className='Links'>
        <NavLink to="/">
            <img src={actividades} alt="" />
            <p>Actividaes</p>
        </NavLink>
    </div>
  )
}

export default LinkActivities