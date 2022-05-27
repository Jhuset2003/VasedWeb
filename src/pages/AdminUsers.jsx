import {React, useState} from 'react'
import MainLayout from '../layout/MainLayout'
import ModalLayout from '../layout/ModalLayout'
import TableAttendance from "../components/Tables/TableAttendance"
import FormUsers from '../components/Forms/FormUsers'

import BtnStyles from '../styles/Buttons.module.css'
import styles from './styles/AdminUser.module.css'

const AdminUsers = () => {
  const [openModal,setOpenModal] = useState(false)
  return (
    <>
      <MainLayout>
        <div className={styles.Letters}>
            <h1>Usuarios</h1>
            <button className={BtnStyles.BtnDark} onClick={()=> setOpenModal(!openModal)}> Crear nuevo usuario </button>
        </div>
        <TableAttendance/>
      </MainLayout>
      <ModalLayout title="Formulario Usuarios" setOpenModal={setOpenModal} openModal={openModal} icon="show">
          <FormUsers/>
      </ModalLayout>
    </>
  )
}

export default AdminUsers