import React from 'react'
import {Link} from "react-router-dom"
import { SiGoogleclassroom } from 'react-icons/si';
import "../../NavStyles/NavbarStyles.css"

function LinkClassrooms() {
  return (
    <div className='Links'>
        <Link to="/">
            <i><SiGoogleclassroom/></i>
        </Link>
    </div>
  )
}

export default LinkClassrooms