import React from 'react'
import {Link} from "react-router-dom"
import { CgProfile } from 'react-icons/cg';
import "../../NavStyles/NavbarStyles.css"

function LinkProfile() {
  return (
    <div className='Links'>
        <Link to="/">
            <i><CgProfile/></i>
        </Link>
    </div>
  )
}

export default LinkProfile