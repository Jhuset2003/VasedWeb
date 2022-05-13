import React from 'react'
import logRecort from "../../../assests/Recurso2Recort.png"
import LinkHome from "./NavBarLoginLinks/LinkHome"
import LinkActivities from "./NavBarLoginLinks/LinkActivities"
import LinkClassrooms from "./NavBarLoginLinks/LinkClassrooms"
import LinkProfile from "./NavBarLoginLinks/LinkProfile"
import { FiMenu } from 'react-icons/fi';
function NavBarLogin() {
  return (
    <div className='NavBarLoginContainer'>
        <nav className='NavBarLogin'>
            <div className='NavBarLoginLog'>
                <img src={logRecort} alt="" />
            </div>
            <div className='NavLinksContainer'>
                <ul>
                    <li><LinkHome/>Home</li>
                    <li><LinkActivities/>Actividades</li>
                    <li><LinkClassrooms/>Aulas</li>
                </ul>
            </div>
            <div className='NavBarLoginProfile'>
                <li><LinkProfile/>Perfil</li>
            </div>
            <div className='NavCellMenu'>
                <button className='BtnWhite'><FiMenu/></button>
            </div>
        </nav>
    </div>
  )
}

export default NavBarLogin