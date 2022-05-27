import React, { useContext, useState } from 'react'
import CardAula from '../components/Cards/CardAula'
import FormAulas from '../components/Forms/FormAulas'
import Search from '../components/Sections/Search'
import MainLayout from '../layout/MainLayout'
import { AulaContext, UserContext } from '../context/GlobalContext'

import ModalLayout from '../layout/ModalLayout'
import BtnStyles from '../styles/Buttons.module.css'
import styles from './styles/AdminUser.module.css'
import  Form  from '../components/Forms/Form'

const Aulas = () => {
  const [openModal,setOpenModal] = useState(false)

  const { user }  = useContext(UserContext)

  const { aulas } = useContext(AulaContext);


  return (
    
    <>
      <div>
        <MainLayout>
          <div className={styles.Letters}>
            <h1>Aula</h1>
            {user.role === 1 || user.role === 2 ?
              <button className={BtnStyles.BtnDark} onClick={()=> setOpenModal(!openModal)}>Crear nueva aula</button>
            :null}
            
          </div>
          <Search/>
          {aulas.map(aulas => <CardAula aulas={aulas}/>)}

        </MainLayout>
        <ModalLayout title="Formulario Aulas" setOpenModal={setOpenModal} openModal={openModal} icon="show">
            <FormAulas setOpenModal={setOpenModal} openModal={openModal}/>
            {/* <Form setOpenModal={setOpenModal} openModal={openModal}/> */}
        </ModalLayout>
      </div>
    </>

  )
}

export default Aulas