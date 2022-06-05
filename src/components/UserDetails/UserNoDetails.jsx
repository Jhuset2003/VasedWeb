import React from 'react'
import userStyles from "./UserDetails.module.css"
import { FaBoxOpen } from 'react-icons/fa';

function UserNoDetails({text}) {
  return (
    <>
  
      <div className={userStyles.UserNoDetailsContainer}>
          <i><FaBoxOpen/></i>
          <h3>{text}</h3>
      </div>

    </>
  )
}

export default UserNoDetails