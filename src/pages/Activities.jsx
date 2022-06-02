import { useContext, useState } from 'react'
import CardActivity from '../components/Cards/CardActivity'
import FormActivities from '../components/Forms/FormActivities'
import Search from '../components/Sections/Search'
import MainLayout from '../layout/MainLayout'

import ModalLayout from '../layout/ModalLayout'
import BtnStyles from '../styles/Buttons.module.css'
import styles from './styles/AdminUser.module.css'
import { SessionContext } from '../context/SessionContext'
import { motion } from 'framer-motion'
import { GlobalContext } from '../context/GlobalContext'

const Activities = () => {
  const [openModal,setOpenModal] = useState(false)

  const { user }  = useContext(SessionContext)
  const { state: { tasks } }  = useContext(GlobalContext)
  
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}}>
      <MainLayout>
        <div className={styles.Letters}>
          <h1>Actividades</h1>
          
          {user.role === 1 || user.role === 2 ?
            <button className={BtnStyles.BtnDark} onClick={()=> setOpenModal(!openModal)}> Crear nueva actividad </button>
          :null}

        </div>
        <Search/>

        {tasks.map((task) => {
          return <CardActivity key={task.id} task={task}/>
        })}
  
      </MainLayout>
      <ModalLayout title="Formulario Actividades" setOpenModal={setOpenModal} openModal={openModal} icon="show">
        <FormActivities setOpenModal={setOpenModal} openModal={openModal}/>
      </ModalLayout>
    </motion.div>
  )
}

export default Activities