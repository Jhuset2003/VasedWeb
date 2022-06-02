//components
import CardActivity from '../components/Cards/CardActivity'
import FormActivities from '../components/Forms/FormActivities'
import Search from '../components/Sections/Search'
import MainLayout from '../layout/MainLayout'
import ModalLayout from '../layout/ModalLayout'

//styles
import BtnStyles from '../styles/Buttons.module.css'
//use the same stlye as adminUser
import styles from './styles/AdminUser.module.css'

//react
import { useContext, useState } from 'react'
import { SessionContext } from '../context/SessionContext'
import { motion } from 'framer-motion'
import { GlobalContext } from '../context/GlobalContext'

const Activities = () => {
  const [openModal,setOpenModal] = useState(false)
  const [modalTask,setModalTask] = useState(false)
  const [modalEdit,setModalEdit] = useState(false)

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
          return <CardActivity 
          key={task.id} task={task} 
          modalEdit={modalEdit} setModalEdit={setModalEdit}
          modalTask={modalTask} setModalTask={setModalTask}
          />
        })}
  
      </MainLayout>


      <ModalLayout title="Formulario Actividades" setOpenModal={setOpenModal} openModal={openModal} icon="show">
        <FormActivities setOpenModal={setOpenModal} openModal={openModal}/>
      </ModalLayout>

      <ModalLayout title="Editar Actividad" setOpenModal={setModalEdit} openModal={modalEdit} icon="show">
          <FormActivities/>
      </ModalLayout>

      <ModalLayout title="Entregar actividad" setOpenModal={setModalTask} openModal={modalTask}>
        <h1>Hacer entrega</h1>
        <div className={styles.textareaTitle}>
            <h4>Entrega</h4>
            <textarea cols="70" rows="10" className={styles.textarea}></textarea>
        </div>
        <div className={styles.btnContainer}>
            <button className={BtnStyles.BtnPink}>Enviar</button>
            <button className={BtnStyles.BtnPurple}>Cancelar</button>
        </div>
      </ModalLayout>

    </motion.div>
  )
}

export default Activities