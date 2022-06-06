import React, { useState} from 'react'
import newCss from '../components/Forms/styles/FormOfNewPassword.module.css';
import inputCss from '../styles/Inputs.module.css';
import btn from '../styles/Buttons.module.css';
import formCss from '../components/Forms/styles/FormLogin.module.css'; 
import { Formik } from 'formik';
import ModalLayout from '../layout/ModalLayout';
import { Link, useParams } from 'react-router-dom';
import { activateAccount } from '../services/users';

const ActivateAccount = () => {
    

    let {id} = useParams();
  let {token} = useParams();

  const [openModal, setOpenModal] = useState(false);

  const handleSubmitCustom = async (values) => {
    const resp = await activateAccount(
      {
        id,
        token,
        password: values.password
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
        password: "",
      }}

      onSubmit={(valores)=>{
        handleSubmitCustom(valores)
        console.log("Contraseña nueva guardada éxitosamente") 
      }}
    
      validate={(valores) =>{
        let errores = {};

        //Validación de contraseña 
        if(!valores.password){
          errores.password = 'Ingresa una contraseña'
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
                      id="password" 
                      name="password"
                      className={inputCss.purpleInput} 
                      placeholder="*************"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {touched.password && errors.password && <div className={formCss.errors}>{errors.password}</div>}
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
          <h1>Cuenta activada con éxito</h1>
          <Link to="/login">
            <button className={btn.BtnGreen}>Iniciar sesión</button>
          </Link>
        </div>
        
      </ModalLayout>
    </>

  )
}

export default ActivateAccount