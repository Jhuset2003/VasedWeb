import styleForm from './styles/FormUsers.module.css'
import inputCss from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';
import { Formik,  Field } from 'formik';

const FormAulas = ({setOpenModal, openModal}) => {
  return (
    <>
        <Formik
        initialValues={{
        colors: "",
        name: "",
        capacity: "",
        code: "",
        dateEnd: "",
        format: "",
        description: "",
        descriptionAdmin: ""
        }}
        validate={(valores) =>{
        let errores = {};
        
        if(!valores.name){
            errores.name = 'Ingrese nombres'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errores.name = "Los nombres solo puede contener letras"
        }
        if(!valores.capacity){
            errores.capacity= 'Ingrese capacidad'
        }
        
        if(!valores.code){
            errores.code = 'Ingrese un código'
        }
        if(!valores.dateEnd){
            errores.dateEnd = 'Seleccione un fecha'
        }
        if(!valores.format){
            errores.format = 'Ingrese un formato'
        }
        if(!valores.description){
            errores.description = 'Ingrese una desccripción'
        }
        if(!valores.descriptionAdmin){
            errores.descriptionAdmin = 'Ingrese una desccripción'
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

                    <div className={styleForm.divContent}>
                    <label htmlFor="color" className={styleForm.formSubtitle}>Colores</label>
                    <div className={styleForm.radioContent}>
                    <label>
                        <Field type="radio" name="picked" value="One"className={styleForm.radioBtnB} />
                    </label>
                    <label>
                        <Field type="radio" name="picked" value="One" className={styleForm.radioBtnP}/>
                    </label>
                    <label>
                        <Field type="radio" name="picked" value="One"className={styleForm.radioBtnY} />
                    </label>
                    <label>
                        <Field type="radio" name="picked" value="One" className={styleForm.radioBtnG}/>
                    </label>
                    </div>
                    </div>

                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="name" className={styleForm.formSubtitle}>Nombre Aula</label>
                            <input 
                            type="text" id="name" name="name" placeholder="Aula 1" className={inputCss.purpleInput}
                            value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.name && errors.name && <div className={styleForm.errors}>{errors.name}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="dateEnd" className={styleForm.formSubtitle}>Fecha terminación</label>
                            <input 
                            type="date" id="dateEnd" name="dateEnd" placeholder="20/03/2023" className={inputCss.purpleInput}
                            value={values.dateEnd} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.dateEnd && errors.dateEnd && <div className={styleForm.errors}>{errors.dateEnd}</div>}
                        </div>

                    </div>
                    
                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="capacity" className={styleForm.formSubtitle}>Capacidad maxima</label>
                            <input 
                            type="text" id="capacity" name="capacity" placeholder="100" className={inputCss.purpleInput}
                            value={values.capacity} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.capacity && errors.capacity && <div className={styleForm.errors}>{errors.capacity}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="code" className={styleForm.formSubtitle}>Código</label>
                            <input 
                            type="text" id="code" name="code" placeholder="10101" className={inputCss.purpleInput}
                            value={values.code} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.code && errors.code && <div className={styleForm.errors}>{errors.code}</div>}
                        </div>
                    </div>
                    
                    <div className={styleForm.formItem}>
                        <label htmlFor="description" className={styleForm.formSubtitle}>Descripción</label>
                        <textarea name="description" id="description" cols="10" rows="5" placeholder="..." className={inputCss.purpleInput}
                        value={values.description} onChange={handleChange} onBlur={handleBlur}>
                        </textarea> 
                        {touched.description && errors.description && <div className={styleForm.errors}>{errors.description}</div>}
                    </div>
                    <div className={styleForm.formItem}>
                        <label htmlFor="descriptionAdmin" className={styleForm.formSubtitle}>Descripción Administrador</label>
                        <textarea name="descriptionAdmin" id="descriptionAdmin" cols="10" rows="5" placeholder="..." className={inputCss.purpleInput}
                        value={values.description} onChange={handleChange} onBlur={handleBlur}>
                        </textarea> 
                        {touched.descriptionAdmin && errors.descriptionAdmin && <div className={styleForm.errors}>{errors.descriptionAdmin}</div>}
                    </div>
                    <div className={styleForm.btnCenter}>
                        <button 
                        type="submit" 
                        className={btn.BtnPurple}>Enviar</button>
                        <button className={btn.BtnPink} onClick={()=> setOpenModal(!openModal)}> Cancelar</button>
                    </div>
                </form> 
            </div>
        )}
        </Formik>

    </>
  )
}

export default FormAulas