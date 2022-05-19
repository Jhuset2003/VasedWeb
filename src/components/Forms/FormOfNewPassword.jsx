import React, { useState} from 'react'
import newCss from './styles/FormOfNewPassword.module.css';
import inputCss from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';
import formCss from './styles/FormLogin.module.css';
import { Formik } from 'formik';
import ModalRecover from '../Modals/ModalRecover';



const FormOfNewPassword = () => {
  const [modalState, setModalState] = useState(false);


  return (
    <>
      <Formik
      initialValues={{
        newPassword: "",
        confirmPassword: ""
      }}

      onSubmit={(valores, {resetForm})=>{
        resetForm();
        console.log("Contraseña actialuzada éxitosamente") 
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
                      id="newPassword" 
                      name="newPassword"
                      className={inputCss.purpleInput} 
                      placeholder="*************"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {touched.password && errors.password && <div className={formCss.errors}>{errors.password}</div>}
                  </div>

                  <div className={newCss.formField}>
                      <h3 className={newCss.formFieldTitle}>Repetir contraseña</h3>
                      <input 
                      type="password" 
                      id="confirmPassword" 
                      name="confirmPassword"
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
                      onClick={() => setModalState(!state)}>Confirmar</button>
                  </div>
                </form>
            </div>
        </div>
      )}
      </Formik>

      <ModalRecover 
      state= {modalState}
      modalState={setModalState}
      />
    </>

    
  )
}

export default FormOfNewPassword