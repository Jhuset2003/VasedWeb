import React from 'react'
import {NavLink} from "react-router-dom"
import "../../NavStyles/NavbarStyles.css"
import { CgProfile } from "react-icons/cg";

function LinkProfile() {
  return (
    <div className='Links'>
        <NavLink to="/perfil">
            <i><CgProfile/></i>
        </NavLink>
    </div>
  )
}

export default LinkProfile