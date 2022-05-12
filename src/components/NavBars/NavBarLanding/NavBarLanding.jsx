import React from 'react'
import log from "../../../assests/Recurso2.png"
import {Link} from "react-router-dom"
import { RiLoginBoxFill } from 'react-icons/ri';
import "../../../styles/Buttons_module.css"
function NavBarLanding() {
  return (
    <div className='NavLanContainer'>
      {/*<nav>
        <div className='NavLanLogo'>
          <img src={log} alt="" />
        </div>
        <div className='NavLanLogin'>
          <Link to="/">
            <i><RiLoginBoxFill/></i>
          </Link>
        </div>
      </nav>*/}
      <button className='BtnBlue'>aaaaaaaaaaa <RiLoginBoxFill/></button>
    </div>
  )
}

export default NavBarLanding