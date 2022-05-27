import { useContext, useState } from 'react'
import CardActivity from '../components/Cards/CardActivity'
import FormActivities from '../components/Forms/FormActivities'
import Search from '../components/Sections/Search'
import MainLayout from '../layout/MainLayout'
import { ActivityContext, UserContext } from '../context/GlobalContext'

import ModalLayout from '../layout/ModalLayout'
import BtnStyles from '../styles/Buttons.module.css'
import styles from './styles/AdminUser.module.css'

const Activities = () => {
  const [openModal,setOpenModal] = useState(false)

  const { user }  = useContext(UserContext)

  const { activity } = useContext(ActivityContext);
  
  return (
    <div>
      <MainLayout>
        <div className={styles.Letters}>
          <h1>Actividades</h1>
          
          {user.role === 1 || user.role === 2 ?
            <button className={BtnStyles.BtnDark} onClick={()=> setOpenModal(!openModal)}> Crear nueva actividad </button>
          :null}

        </div>
        <Search/>
        {activity.map(activity => <CardActivity activity={activity}/>)}
  
      </MainLayout>
      <ModalLayout title="Formulario Actividades" setOpenModal={setOpenModal} openModal={openModal} icon="show">
        <FormActivities setOpenModal={setOpenModal} openModal={openModal}/>
      </ModalLayout>
    </div>
  )
}

export default Activities