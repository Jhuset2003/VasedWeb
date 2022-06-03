import styles from './ModalLayout.module.css'
import  btn from '../styles/Buttons.module.css'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const ModalLayout = ({children, title, openModal,setOpenModal, icon, color}) => {

    const { state: {classroomEditing, taskEditing, userEditing}, dispatch} = useContext(GlobalContext)

    const handleClose = () => {
        setOpenModal(false)
        dispatch({
            type: 'SET_EDITING_NULL',
        })
    }

  return (
        <>
        {(openModal || classroomEditing || taskEditing || userEditing ) &&
            <div className={styles.modal} >
                <div className={styles.modalCenter}>
                    <motion.div animate={{scale:1}} initial={{scale:0}} className={color === "success" ? styles.modalGreen : color === "error" ? styles.modalRed : styles.modalColor}>
                        <div className={styles.modalTop}>

                        {icon==="show" ? <button className={`${btn.BtnRounded} ${styles.ptBtn}`} onClick={handleClose}>
                            <FaTimes className={styles.modalIcon}/>
                        </button> : null}

                        <h1 className={styles.modalTitle}>{title}</h1>
                    
                        </div>
                        <div className={styles.modalContent}>

                            {children}

                        </div>
                    </motion.div>
                </div>
            </div>}
    </>
  )
}


/* 
Componente modal, este componente tiene la funcion de crear la estructura base de un modal
Utiliza 4 propiedades principales:
children -> Prop que trae todo el contenido que se quiera dentro del contenedor modal
title -> un dato tipo String que se inserta en una etiqueta <h1>
openModal -> estado creado en el componente que utiliza el modal, este estado es utilizado para abrir el modal y enviado como propiedad para cerrarlo
setOpenModal -> Es la otra parte del estado que actualiza el estado y tambien se envia como propiedad
color -> Establece un color borde por defecto que es el negro y un tamaño que se ajusta al contenido, colores disponibles verde = success y rojo = error
icon -> propiedad que muestra el icono de cerrar

//1. Crear estado
const [openModal,setOpenModal] = useState(false)

//2.Botón evento click
<button onClick={()=> setOpenModal(!openModal)}>Open Modal</button>

//3. Modal importada con el contenido en medio que seria la propiedad children
<ModalLayout title="Modal" setOpenModal={setOpenModal} openModal={openModal}>
    <h1>Hola</h1>
</ModalLayout>
*/

export default ModalLayout