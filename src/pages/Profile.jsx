import btn from '../styles/Buttons.module.css'
import profileCss from './styles/Profile.module.css'
import MainLayout from '../layout/MainLayout'
import FormProfile from '../components/Forms/FormProfile'

import ModalLayout from '../layout/ModalLayout'
import { useState } from 'react'
import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const Profile = () => {
  const [openModal,setOpenModal] = useState(false)
  const { user, setUser } = useContext(SessionContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    setUser({})
    navigate('/login')
  }

  return (
    <motion.div>
        <MainLayout>
            <div className={profileCss.contProfile}>
                <h1 className={profileCss.title}>Perfil</h1>
                  <button onClick={handleLogout} className={btn.BtnPink}>Cerrar sesión</button>
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