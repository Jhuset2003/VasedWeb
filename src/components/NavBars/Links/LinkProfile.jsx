import React from 'react'
import {NavLink} from "react-router-dom"
import navStyles from"../NavStyles/NavbarStyles.module.css"
import { CgProfile } from "react-icons/cg";

function LinkProfile() {
  return (
    <div className={navStyles.Links}>
        <NavLink to="/perfil">
            <i><CgProfile/></i>
        </NavLink>
    </div>
  )
}

export default LinkProfile