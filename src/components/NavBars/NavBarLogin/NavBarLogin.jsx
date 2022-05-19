import React from 'react'
import log from "../../../assests/logo-aula-virtual.png"
import LinkHome from "./NavBarLoginLinks/LinkHome"
import LinkActivities from "./NavBarLoginLinks/LinkActivities"
import LinkClassrooms from "./NavBarLoginLinks/LinkClassrooms"
import LinkProfile from "./NavBarLoginLinks/LinkProfile"
import Dropdown from './Menu/Dropdown'
import LinkUser from './NavBarLoginLinks/LinkUser'
import navStyles from "../NavStyles/NavbarStyles.module.css"
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
    <div className={navStyles.NavBarLoginContainer}>
        <nav className={navStyles.NavBarLogin}>
            <div className={navStyles.NavBarLoginLog}>
                <img src={log} alt="" />
            </div>
            <div className={navStyles.NavLinksContainer}>
                <ul>
                    <li><LinkHome/></li>
                    <li><LinkActivities/></li>
                    <li><LinkClassrooms/></li>
                    <li><LinkUser/></li>
                </ul>
            </div>
            <div className={navStyles.NavBarLoginProfile}>
                <i><LinkProfile/></i>
            </div>
            <div className={navStyles.NavCellMenu}>
                
                  <Dropdown dropdownTitle="Dropdown" items={items} />
                
            </div>
        </nav>
        <div></div>
    </div>
  )
}

export default NavBarLogin