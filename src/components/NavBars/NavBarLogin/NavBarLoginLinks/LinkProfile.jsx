import React from 'react'
import {NavLink} from "react-router-dom"
import "../../NavStyles/NavbarStyles.css"
import { VscAccount } from "react-icons/vsc";

function LinkProfile() {
  return (
    <div className='Links'>
        <NavLink to="/perfil">
            <i><VscAccount/></i>
        </NavLink>
    </div>
  )
}

export default LinkProfile