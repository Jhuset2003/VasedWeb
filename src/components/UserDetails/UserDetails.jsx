import React from 'react'
import userStyles from "./UserDetails.module.css"
import MainLayout from "../../layout/MainLayout"
function User() {
  return (
      <>
      <MainLayout>
        <div className={userStyles.UserDetailsContainer}>
            <div className={userStyles.User}>
                <h2 className={userStyles.UserName}>Adam B Schiff</h2>
                <p className={userStyles.UserCC}>CC 1101263548</p>
                <p className={userStyles.UserMail}>adambs@correo.com</p>
                <p className={userStyles.UserLocation}>Medellin - Colombia</p>
            </div>
            <div className={userStyles.Details}>
                <p className={userStyles.DetailsRol}>Estudiante</p>
                <p className={userStyles.DetailsInit}>Ultimo Ingreso: 20/03/2021</p>
                <p className={userStyles.DetailsCreated}>Fecha de creacion: 04/02/2021</p>
                <p className={userStyles.DetailsEnd}>Fecha de nacimientos: 04/01/2021</p>
            </div>
        </div>
      </MainLayout>
      </>
  )
}

export default User