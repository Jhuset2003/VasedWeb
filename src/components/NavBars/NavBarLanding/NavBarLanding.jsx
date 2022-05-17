import React from 'react'
import log from "../../../assests/Recurso2.png"
import {Link} from "react-router-dom"
import "../../../styles/Buttons_module.css"
import "../NavStyles/NavbarStyles.css"
function NavBarLanding() {
  return (
    <div className='NavLanContainer'>
      <nav className='NavBarLan'>
        <div className='NavLanLogo'>
          <img src={log} alt="" />
        </div>
        <div className='NavLanLogin'>
          <Link to="/">
            <button className='BtnPurple'>Login</button>
          </Link>
        </div>
      </nav>  
    </div>
  )
}

export default NavBarLanding