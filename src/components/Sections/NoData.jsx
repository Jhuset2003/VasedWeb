import styles from './styles/NoData.module.css'
import {FaBoxOpen} from 'react-icons/fa'

const NoData = () => {
  return (
    <div className={styles.content}>
        <FaBoxOpen className={styles.icon}/>
        <h1>Ninguna dato asignad@ aun</h1>
    </div>
  )
}

export default NoData