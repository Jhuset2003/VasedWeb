import log from "../../assests/logo-aula-virtual.png"
import {Link} from "react-router-dom"
import style from "../../styles/Buttons.module.css"
import React, { useContext } from 'react'
import LinkHome from "./Links/LinkHome"
import LinkActivities from "./Links/LinkActivities"
import LinkClassrooms from "./Links/LinkClassrooms"
import LinkProfile from "./Links/LinkProfile"
import Dropdown from './Menu/Dropdown'
import LinkUser from './Links/LinkUser'
import navStyles from "./NavStyles/NavbarStyles.module.css"
import LinkStudents from './Links/LinkStudents'
import { SessionContext } from '../../context/SessionContext'
import { motion } from "framer-motion"
function NavBars() {
    const login = true

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
    <>
    {
        login === false ?
    
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
    :login === true ?
    <div className={navStyles.NavBarLoginContainer}>
        <motion.nav className={navStyles.NavBarLogin}>
            <motion.div className={navStyles.NavBarLoginLog} animate={{scale:1}} initial={{scale:0}}>
                <img src={log} alt="" />
            </motion.div>
            <div className={navStyles.NavLinksContainer}>
                <ul>
                    <motion.li animate={{scale:1}} initial={{scale:0}} ><LinkHome/></motion.li>
                    <motion.li animate={{scale:1}} initial={{scale:0}}><LinkActivities/></motion.li>
                    <motion.li animate={{scale:1}} initial={{scale:0}}><LinkClassrooms/></motion.li>
                    {
                      user.role === 1 ?
                      <motion.li animate={{scale:1}} initial={{scale:0}}><LinkUser/></motion.li>
                      :user.role === 2 ?
                      <motion.li animate={{scale:1}} initial={{scale:0}}><LinkStudents/></motion.li>
                      :null
                    }
                </ul>
            </div>
            <motion.div className={navStyles.NavBarLoginProfile} animate={{scale:1}} initial={{scale:0}}>
                <i><LinkProfile/></i>
            </motion.div>
            <motion.div className={navStyles.NavCellMenu}  >
                
                  <Dropdown dropdownTitle="Dropdown" items={items} />
                
            </motion.div >
        </motion.nav>
        <div></div>
    </div>
    :null
    }
    </>
  )
}

export default NavBars