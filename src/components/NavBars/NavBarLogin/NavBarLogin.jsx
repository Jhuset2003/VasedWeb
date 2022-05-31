import React, { useContext } from 'react'
import log from "../../../assests/logo-aula-virtual.png"
import LinkHome from "./NavBarLoginLinks/LinkHome"
import LinkActivities from "./NavBarLoginLinks/LinkActivities"
import LinkClassrooms from "./NavBarLoginLinks/LinkClassrooms"
import LinkProfile from "./NavBarLoginLinks/LinkProfile"
import Dropdown from './Menu/Dropdown'
import LinkUser from './NavBarLoginLinks/LinkUser'
import navStyles from "../NavStyles/NavbarStyles.module.css"
import LinkStudents from './NavBarLoginLinks/LinkStudents'
import { SessionContext } from '../../../context/SessionContext'


function NavBarLogin() {

    const { user }  = useContext(SessionContext)

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
          
          anchor: <>
          {
                      user.role === 1 ?
                      <LinkUser/>
                      :user.role === 2 ?
                      <LinkStudents/>
                      :null
                    }
          </>,
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
                    {
                      user.role === 1 ?
                      <li><LinkUser/></li>
                      :user.role === 2 ?
                      <li><LinkStudents/></li>
                      :null
                    }
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