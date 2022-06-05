import btn from '../styles/Buttons.module.css'
import profileCss from './styles/Profile.module.css'
import MainLayout from '../layout/MainLayout'
import FormProfile from '../components/Forms/FormProfile'
import {FaUserGraduate} from 'react-icons/fa'

import ModalLayout from '../layout/ModalLayout'
import { useState } from 'react'
import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GlobalContext } from '../context/GlobalContext'
const Profile = () => {
  const [openModal,setOpenModal] = useState(false)
  const { user, setUser } = useContext(SessionContext)
  const { dispatch } = useContext(GlobalContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    setUser({})
    window.localStorage.removeItem("sessionLogin")
    window.localStorage.removeItem("token")
    navigate('/login')

    dispatch({
      type: 'SET_INITIAL_STATE',
    })
  }

  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}}>
        <MainLayout>
            <div className={profileCss.contProfile}>
                <h1 className={profileCss.title}>Perfil</h1>
                  <button onClick={handleLogout} className={btn.BtnPink}>Cerrar sesión</button>
            </div>
            <div className={profileCss.containerData}>
              <picture className={profileCss.img}>
                <FaUserGraduate className={profileCss.icon}/>
              </picture>
              <div className={profileCss.textContainer}>
                <div className={profileCss.User}>
                  <h2 className={profileCss.UserName}>e</h2>
                  <p className={profileCss.UserCC}>s</p>
                  <p className={profileCss.UserMail}>d</p>
                  <p className={profileCss.UserLocation}>s</p>
                </div>
                <div className={profileCss.Details}>
                    <p className={profileCss.DetailsRol}>
                      Rol: </p>
                    <p className={profileCss.DetailsInit}>Fecha ultimo ingreso: -</p>
                    <p className={profileCss.DetailsCreated}>Fecha creación: </p>
                    <p className={profileCss.DetailsEnd}>Fecha nacimiento: </p>
                </div>
              </div>
            </div>
            <FormProfile setOpenModal={setOpenModal} openModal={openModal}/>
        </MainLayout>

        <ModalLayout title="Modal" setOpenModal={setOpenModal} openModal={openModal} color="success">
          <div className={profileCss.modalContentSize}>
            <h1>Contraseña nueva establecida con éxito</h1>
            <button className={btn.BtnGreen} onClick={()=> setOpenModal(!openModal)}>Aceptar</button> 
          </div>
        </ModalLayout>
    </motion.div>
  )
}

export default Profile