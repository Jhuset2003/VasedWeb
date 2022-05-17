import inputCss from '../../styles/Inputs.module.css';
import formProfile from './styles/FormProfile.module.css';
import btn from '../../styles/Buttons.module.css';
import { Formik } from 'formik';

const FormProfile = () => {
    return (
    <>
        <Formik
        initialValues={{
        email: "",
        birthday: "",
        city: "",
        password: "",
        confirmPassword: ""
        }}
        validate={(valores) =>{
        let errores = {};
    
        if(!valores.email){
            errores.email = 'Ingresa un correo electronico'
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errores.email = "Debe contener un correo valido"
        }
        
        if(!valores.birthday){
            errores.birthday = 'Ingresa una fecha de nacimiento'
        }
        if(!valores.city){
            errores.city = 'Ingresa una ciudad'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.city)){
            errores.city = "La ciudad solo puede contener letras"
        }

        if(!valores.password){
            errores.password = 'Ingresa una contraseña'
        }
        if(!valores.confirmPassword){
            errores.confirmPassword = 'Repitir de nuevo la contraseña'
        }
        return errores;
        }}
        
        onSubmit={({resetForm})=>{
        resetForm();
        console.log("Sended") 
        }}>
        {( {values, handleSubmit, errors, touched, handleChange, handleBlur} ) => (
            <div className={formProfile.formContainer}>
                <h1 className={formProfile.formTitle}>Actualizar perfil</h1>
                <form className={formProfile.form} onSubmit={handleSubmit}>
                    
                    <div className={formProfile.flexItem}>
                        <div className={formProfile.formItem}>
                            <label htmlFor="name" className={formProfile.formSubtitle}>Nombres</label>
                            <input 
                            type="text" id="name" name="name" placeholder="Nombres" className={inputCss.disabledInput}
                            value={values.name} disabled/>
                        </div>
                        <div className={formProfile.formItem}>
                            <label htmlFor="lastname" className={formProfile.formSubtitle}>Apellidos</label>
                            <input 
                            type="text" id="lastname" name="lastname" placeholder="Apellidos" className={inputCss.disabledInput}
                            value={values.lastname} disabled/>
                        </div>
                    </div>
                    <div className={formProfile.flexItem}>
                        <div className={formProfile.formItem}>
                            <label htmlFor="id" className={formProfile.formSubtitle}>Documento</label>
                            <input 
                            type="number" id="id" name="id" placeholder="0000000" className={inputCss.disabledInput}
                            value={values.id} disabled/>
                        </div>
                        <div className={formProfile.formItem}>
                            <label htmlFor="typeid" className={formProfile.formSubtitle}>Tipo de documento</label>
                            <input 
                            type="date" id="typeid" name="typeid" placeholder="CC" className={inputCss.disabledInput}
                            value={values.typeid} disabled/>
                        </div>
                    </div>
                    <div className={formProfile.flexItem}>
                        <div className={formProfile.formItem}>
                            <label htmlFor="email" className={formProfile.formSubtitle}>Correo</label>
                            <input 
                            type="email" id="email" name="email" placeholder="example@correo.com" className={inputCss.purpleInput}
                            value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.email && errors.email && <div className={formProfile.errors}>{errors.email}</div>}
                        </div>
                        <div className={formProfile.formItem}>
                            <label htmlFor="birthday" className={formProfile.formSubtitle}>Fecha de nacimiento</label>
                            <input 
                            type="date" id="birthday" name="birthday" placeholder="03/06/2022" className={inputCss.purpleInput}
                            value={values.birthday} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.birthday && errors.birthday && <div className={formProfile.errors}>{errors.birthday}</div>}
                        </div>
                    </div>

                    <div className={formProfile.flexItem}>
                        <div className={formProfile.formItem}>
                            <label htmlFor="city" className={formProfile.formSubtitle}>Ciudad</label>
                            <input 
                            type="text" id="city" name="city" placeholder="Ciudad" className={inputCss.purpleInput}
                            value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.city && errors.city && <div className={formProfile.errors}>{errors.city}</div>}
                        </div>
                        <div className={formProfile.formItem}>
                            <label htmlFor="country" className={formProfile.formSubtitle}>País</label>
                            <input 
                            type="text" id="country" name="country" placeholder="País" className={inputCss.disabledInput}
                            value={values.country} disabled/>
                        </div>
                    </div>

                    <div className={formProfile.formItem}>
                        <label htmlFor="password" className={formProfile.formSubtitle}>Contraseña</label>
                        <input 
                        type="password" id="password" name="password" placeholder="************" className={inputCss.purpleInput}
                        value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.password && errors.password && <div className={formProfile.errors}>{errors.password}</div>}
                    </div>
                    <div className={formProfile.formItem}>
                        <label htmlFor="confirmPassword" className={formProfile.formSubtitle}>Repetir contraseña</label>
                        <input 
                        type="password" id="confirmPassword" name="confirmPassword" placeholder="************" className={inputCss.purpleInput}
                        value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.confirmPassword && errors.confirmPassword && <div className={formProfile.errors}>{errors.confirmPassword}</div>}
                    </div>
                    <button 
                    type="submit" 
                    className={btn.BtnPurple}>Actualizar</button>
                </form> 
            </div>
        )}
        </Formik>
    </>
      )
    }

/* 
El componente formulario perfil recive en total 10 datos para los inputs de los cuales solo 5 seran modificables 
*/
export default FormProfile