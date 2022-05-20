import React from 'react'
import UserDetails from '../components/UserDetails/UserDetails'
import UserNoDetails from '../components/UserDetails/UserNoDetails'
import styles from './styles/AdminUser.module.css'
import BtnStyles from '../styles/Buttons.module.css'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

const DetailUser = () => {
    const navigate = useNavigate()
  return (
    <div>
        <MainLayout>
        <div className={styles.Letters}>
            <h1>Detalle perfil</h1>
            <button className={BtnStyles.BtnDark} onClick={() => navigate(-1)}> Regresar </button>
        </div>
        <UserDetails/>
        <UserNoDetails/>
        <UserNoDetails/>
        <UserNoDetails/>
        </MainLayout>
    </div>
  )
}

export default DetailUser