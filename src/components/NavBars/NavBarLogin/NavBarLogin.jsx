import React from 'react'
import log from "../../../assests/Recurso2.png"
import LinkHome from "./NavBarLoginLinks/LinkHome"
import LinkActivities from "./NavBarLoginLinks/LinkActivities"
import LinkClassrooms from "./NavBarLoginLinks/LinkClassrooms"
import LinkProfile from "./NavBarLoginLinks/LinkProfile"

import Dropdown from './Menu/Dropdown'
import LinkUser from './NavBarLoginLinks/LinkUser'
function NavBarLogin() {
    const items = [
        {
          anchor: <LinkHome/>,
        },
        {
          
          anchor: <LinkActivities/>
        },
        {
          
          anchor: <LinkClassrooms/>,
        }
        ,
        {
          
          anchor: <LinkUser/>,
        }
        ,
        {
          
          anchor: <LinkProfile/>,
        }
      ];
  return (
    <div className='NavBarLoginContainer'>
        <nav className='NavBarLogin'>
            <div className='NavBarLoginLog'>
                <img src={log} alt="" />
            </div>
            <div className='NavLinksContainer'>
                <ul>
                    <li><LinkHome/></li>
                    <li><LinkActivities/></li>
                    <li><LinkClassrooms/></li>
                    <li><LinkUser/></li>
                </ul>
            </div>
            <div className='NavBarLoginProfile'>
                <i><LinkProfile/></i>
            </div>
            <div className='NavCellMenu'>
                
                  <Dropdown dropdownTitle="Dropdown" items={items} />
                
            </div>
        </nav>
        <div></div>
    </div>
  )
}

export default NavBarLogin