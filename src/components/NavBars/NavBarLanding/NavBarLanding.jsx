import React from 'react'
import log from "../../../assests/logo-aula-virtual.png"
import {Link} from "react-router-dom"
import style from "../../../styles/Buttons.module.css"
import navStyles from"../NavStyles/NavbarStyles.module.css"
function NavBarLanding() {
  return (
    <div className={navStyles.NavLanContainer}>
      <nav className={navStyles.NavBarLan}>
        <div className={navStyles.NavLanLogo}>
          <img src={log} alt="" />
        </div>
        <div className={navStyles.NavLanLogin}>
          <Link to="/">
            <button className={style.BtnPurple}>Login</button>
          </Link>
        </div>
      </nav>  
    </div>
  )
}

export default NavBarLanding