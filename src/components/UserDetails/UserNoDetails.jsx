import React from 'react'
import MainLayout from '../../layout/MainLayout'
import userStyles from "./UserDetails.module.css"
import { FaBoxOpen } from 'react-icons/fa';
function UserNoDetails() {
  return (
    <>
        <MainLayout>
            <div className={userStyles.UserNoDetailsContainer}>
                <i><FaBoxOpen/></i>
                <h3>Ninguna</h3>
            </div>
        </MainLayout>
    </>
  )
}

export default UserNoDetails