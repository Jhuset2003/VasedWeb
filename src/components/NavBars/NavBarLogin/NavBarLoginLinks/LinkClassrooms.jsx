import React from 'react'
import {NavLink} from "react-router-dom"
import aulas from "../../../../assests/Iconos-menu/aulas.svg"
import "../../NavStyles/NavbarStyles.css"

function LinkClassrooms() {
  return (
    <div className='Links'>
        <NavLink className="navlink" to="/aulas">
            <img src={aulas} alt="" />
            <p>Aulas</p>
        </NavLink>
    </div>
  )
}

export default LinkClassrooms