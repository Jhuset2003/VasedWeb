import React, { useEffect, useState } from 'react'
import userStyles from "./UserDetails.module.css"
import { getOneUser } from '../../services/users'
import { useParams } from 'react-router-dom'

const UserDetails = ({user}) => {

  return (
    <>
        <div className={userStyles.UserDetailsContainer}>
            <div className={userStyles.User}>
                <h2 className={userStyles.UserName}>{user?.names + " " + user?.lastNames}</h2>
                <p className={userStyles.UserCC}>{
                user?.dniTypeId === 1
                ? "Admin"
                : user?.dniTypeId === 2
                ? "Profesor"
                : "Estudiante"
                + " " + user?.dni}</p>
                <p className={userStyles.UserMail}>{user?.email}</p>
                <p className={userStyles.UserLocation}>{user?.city + " - " + user?.country}</p>
            </div>
            <div className={userStyles.Details}>
                <p className={userStyles.DetailsRol}>
                  Rol: {user?.roleId === 1
                    ? "Admin"
                    : user?.roleId === 2
                    ? "Profesor"
                    : "Estudiante"}</p>
                <p className={userStyles.DetailsInit}>Fecha ultimo ingreso: -</p>
                <p className={userStyles.DetailsCreated}>Fecha creación: { user?.createdAt?.split("T")[0]
                }</p>
                <p className={userStyles.DetailsEnd}>Fecha nacimiento: {user?.birthDate?.split("T")[0]}</p>
            </div>
        </div>
    </>
  )
}

export default UserDetails