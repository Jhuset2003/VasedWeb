import React, { useState} from 'react'
import newCss from '../components/Forms/styles/FormOfNewPassword.module.css';
import inputCss from '../styles/Inputs.module.css';
import btn from '../styles/Buttons.module.css';
import formCss from '../components/Forms/styles/FormLogin.module.css'; 
import { Formik } from 'formik';
import ModalLayout from '../layout/ModalLayout';
import { Link, useParams } from 'react-router-dom';
import { resetPassword } from '../services/users';

const ResetPassword = () => {

  let {id} = useParams();
  let {token} = useParams();

  const [openModal, setOpenModal] = useState(false);

  const handleSubmitCustom = async (values) => {
    const resp = await resetPassword(
      {
        id,
        token,
        password: values.newPassword
      }
    )
    console.log(resp)
    if (resp.status !== 200 && resp.status !== 204) {
      console.log("error")
      return
    }
    setOpenModal(true);
  }

  return (
    <>
      <Formik
      initialValues={{
        newPassword: "",
      }}

      onSubmit={(valores)=>{
        handleSubmitCustom(valores)
        console.log("Contraseña actialuzada éxitosamente") 
      }}
    
      validate={(valores) =>{
        let errores = {};

        //Validación de contraseña 
        if(!valores.newPassword){
          errores.newPassword = 'Ingresa una contraseña'
       }
        return errores;
      }}>

      {( {values, handleSubmit, errors, touched, handleChange, handleBlur} ) => (
        
        <div className={newCss.container}>
            <div className={newCss.recoverView}>
                <h3 className={newCss.recoverTitle}>Crear una nueva contraseña</h3>
                <form action="" onSubmit={handleSubmit}>
                <div className={newCss.formField}>
                      <h3 className={newCss.formFieldTitle}>Contraseña nueva</h3>
                      <input 
                      type="password" 
                      id="newPassword" 
                      name="newPassword"
                      className={inputCss.purpleInput} 
                      placeholder="*************"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {touched.newPassword && errors.newPassword && <div className={formCss.errors}>{errors.newPassword}</div>}
                  </div>

                  <div className={newCss.BtnContainer}>
                      <button 
                      type='submit' 
                      className={btn.BtnPurple} 
                      >Confirmar</button>
                  </div>
                </form>
            </div>
        </div>
      )}
      </Formik>
      <ModalLayout title="Modal" setOpenModal={setOpenModal} openModal={openModal} 
      color="success">
        
          <div className={newCss.modalContentSize}>
          <h1>Contraseña nueva establecida con éxito</h1>
          <Link to="/login">
            <button className={btn.BtnGreen}>Iniciar sesión</button>
          </Link>
        </div>
        
      </ModalLayout>
    </>
  )
}

export default ResetPassword