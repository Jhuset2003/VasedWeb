import React from 'react'
import {NavLink} from "react-router-dom"
<<<<<<< HEAD
import "../../NavStyles/NavbarStyles.css"
import { VscAccount } from "react-icons/vsc";
=======
import navStyles from"../../NavStyles/NavbarStyles.module.css"
import { CgProfile } from "react-icons/cg";
>>>>>>> 9a759586b485e1a9ef1b76fc5cd478462e70a81d

function LinkProfile() {
  return (
    <div className={navStyles.Links}>
        <NavLink to="/perfil">
            <i><VscAccount/></i>
        </NavLink>
    </div>
  )
}

export default LinkProfile