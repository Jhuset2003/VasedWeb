import styles from './styles/NoData.module.css'
import {FaBoxOpen} from 'react-icons/fa'
import { SessionContext } from '../../context/SessionContext'
import { useContext } from 'react'

const NoData = ({textStudent}) => {
  const {user} = useContext(SessionContext)
  return (
    <div className={styles.content}>
        <FaBoxOpen className={styles.icon}/>
        {user.role === 3 ?
        <h1>{textStudent}</h1>
        : <h1>Ningun dato creado aun</h1>}
    </div>
  )
}

export default NoData