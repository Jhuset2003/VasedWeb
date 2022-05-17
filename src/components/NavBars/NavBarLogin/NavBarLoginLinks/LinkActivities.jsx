import React from 'react'
import {Link} from "react-router-dom"
import { MdOutlineFindInPage } from 'react-icons/md';
import "../../NavStyles/NavbarStyles.css"


function LinkActivities() {
  return (
    <div className='Links'>
        <Link to="/">
            <i className='Hover'><MdOutlineFindInPage/></i>
        </Link>
    </div>
  )
}

export default LinkActivities