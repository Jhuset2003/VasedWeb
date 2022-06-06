import React from 'react'
import TableStudents from '../components/Tables/TableStudents'
import MainLayout from '../layout/MainLayout'

import BtnStyles from '../styles/Buttons.module.css'
import styles from './styles/AdminUser.module.css'
import { motion } from 'framer-motion'


const Students = () => {
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}}>
      <MainLayout>
        <div className={styles.Letters}>
            <h1>Estudiantes</h1>
        </div>
        <TableStudents/>
      </MainLayout>
      

    </motion.div>
  )
}

export default Students