import React from 'react'
import {Link} from "react-router-dom"
import { AiFillHome } from 'react-icons/ai';
import "../../NavStyles/NavbarStyles.css"

function LinkHome() {
  return (
    <div className='Links'>
        <Link to="/">
            <i><AiFillHome/></i>
        </Link>
    </div>
  )
}

export default LinkHome