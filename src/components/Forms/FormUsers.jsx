import styleForm from './styles/FormUsers.module.css'
import inputCss from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';
import { Formik,  Field } from 'formik';

const FormUsers = () =>{
  return (
    <>
        <Formik
        initialValues={{
        name: "",
        lastName: "",
        document: "",
        typeid: "",
        birthday: "",
        country: "",
        email: "",
        rol: ""
        }}
        validate={(valores) =>{
        let errores = {};
        
        if(!valores.name){
            errores.name = 'Ingrese nombres'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errores.name = "Los nombres solo puede contener letras"
        }
        if(!valores.lastName){
            errores.lastName = 'Ingrese apellidos'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastName)){
            errores.lastName = "Los apellidos solo puede contener letras"
        }
        
        if(!valores.document){
            errores.document = 'Ingrese un documento'
        }
        if(!valores.typeid){
            errores.typeid = 'Seleccione un tipo de documento'
        }
        if(!valores.birthday){
            errores.birthday = 'Ingresa una fecha de nacimiento'
        }
        if(!valores.country){
            errores.country = 'Ingrese un país'
        }
        if(!valores.email){
            errores.email = 'Ingresa un correo electronico'
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errores.email = "Debe contener un correo valido"
        }
        if(!valores.rol){
            errores.rol = 'Seleccione un rol'
        }
        return errores;
       
        }}
        
        onSubmit={({resetForm})=>{
        resetForm();
        console.log("Sended") 
        }}>
        {( {values, handleSubmit, errors, touched, handleChange, handleBlur} ) => (
            <div className={styleForm.formContainer}>
                <form className={styleForm.form} onSubmit={handleSubmit}>
                    
                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="name" className={styleForm.formSubtitle}>Nombres</label>
                            <input 
                            type="text" id="name" name="name" placeholder="Nombres" className={inputCss.purpleInput}
                            value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.name && errors.name && <div className={styleForm.errors}>{errors.name}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="lastname" className={styleForm.formSubtitle}>Apellidos</label>
                            <input 
                            type="text" id="lastName" name="lastName" placeholder="Apellidos" className={inputCss.purpleInput}
                            value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.lastName && errors.lastName && <div className={styleForm.errors}>{errors.lastName}</div>}
                        </div>
                    </div>
                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="document" className={styleForm.formSubtitle}>Documento</label>
                            <input 
                            type="number" id="document" name="document" placeholder="0000000" className={inputCss.purpleInput}
                            value={values.document} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.document && errors.document && <div className={styleForm.errors}>{errors.document}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="typeid" className={styleForm.formSubtitle}>Tipo de documento</label>
                            <Field as="select" name="typeid" className={inputCss.purpleInput}
                            value={values.typeid} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" selected>Tipo documento</option>
                                <option value="1">Cédula de ciudadania</option>
                                <option value="2">Tarjeta de identidad</option>
                                <option value="3">Pasaporte</option>
                            </Field>
                            {touched.typeid && errors.typeid && <div className={styleForm.errors}>{errors.typeid}</div>}
                        </div>
                    </div>
                    
                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="birthday" className={styleForm.formSubtitle}>Fecha de nacimiento</label>
                            <input 
                            type="date" id="birthday" name="birthday" placeholder="03/06/2022" className={inputCss.purpleInput}
                            value={values.birthday} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.birthday && errors.birthday && <div className={styleForm.errors}>{errors.birthday}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="country" className={styleForm.formSubtitle}>País</label>
                            <input 
                            type="text" id="country" name="country" placeholder="País" className={inputCss.purpleInput}
                            value={values.country} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.country && errors.country && <div className={styleForm.errors}>{errors.country}</div>}
                        </div>
                    </div>
                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="email" className={styleForm.formSubtitle}>Correo</label>
                            <input 
                            type="email" id="email" name="email" placeholder="example@correo.com" className={inputCss.purpleInput}
                            value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.email && errors.email && <div className={styleForm.errors}>{errors.email}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="rol" className={styleForm.formSubtitle}>Rol</label>
                            <Field as="select" name="rol" className={inputCss.purpleInput}
                            value={values.rol} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" selected>Rol</option>
                                <option value="1">Administrador</option>
                                <option value="2">Profesor</option>
                                <option value="3">Estudiante</option>
                            </Field>
                            {touched.rol && errors.rol && <div className={styleForm.errors}>{errors.rol}</div>}
                        </div>
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
export default FormUsers