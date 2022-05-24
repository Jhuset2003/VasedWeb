import btn from '../styles/Buttons.module.css'
import profileCss from './styles/Profile.module.css'
import MainLayout from '../layout/MainLayout'
import FormProfile from '../components/Forms/FormProfile'
import { Link } from 'react-router-dom'
import ModalLayout from '../layout/ModalLayout'
import { useState } from 'react'

const Profile = () => {
  const [openModal,setOpenModal] = useState(false)


  return (
    <>
        <MainLayout>
            <div className={profileCss.contProfile}>
                <h1 className={profileCss.title}>Perfil</h1>
                <Link to="/login">
                  <button className={btn.BtnPink}>Cerrar sesión</button>
                </Link>
            </div>
            <FormProfile/>
          <button 
            className={btn.BtnPurple}
            onClick={()=> setOpenModal(!openModal)}>Actualizar
          </button>
        </MainLayout>

        <ModalLayout title="Modal" setOpenModal={setOpenModal} openModal={openModal}>
        <h1>Contraseña nueva establecida con éxito</h1>
        <button className={btn.BtnPink} onClick={()=> setOpenModal(!openModal)}>Aceptar</button> 
      </ModalLayout>
    </>
  )
}

export default Profile