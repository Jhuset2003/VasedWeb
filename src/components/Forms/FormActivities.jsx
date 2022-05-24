import styleForm from './styles/FormUsers.module.css'
import inputCss from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';
import { Formik,  Field } from 'formik';

const FormActivities = ({setOpenModal, openModal}) => {
  return (
    <>
        <Formik
        initialValues={{
        colors: "",
        name: "",
        note: "",
        code: "",
        aula: "",
        format: "",
        description: "",
        }}
        validate={(valores) =>{
        let errores = {};
        
        if(!valores.name){
            errores.name = 'Ingrese nombres'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errores.name = "Los nombres solo puede contener letras"
        }
        if(!valores.note){
            errores.note= 'Ingrese capacidad'
        }
        
        if(!valores.code){
            errores.code = 'Ingrese un código'
        }
        if(!valores.aula){
            errores.aula = 'Seleccione un fecha'
        }
        if(!valores.format){
            errores.format = 'Ingrese un formato'
        }
        if(!valores.description){
            errores.description = 'Ingrese una desccripción'
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

                    <div className={styleForm.formItem}>
                        <label htmlFor="name" className={styleForm.formSubtitle}>Nombre Actividad</label>
                        <input 
                        type="text" id="name" name="name" placeholder="Actividad 1" className={inputCss.purpleInput}
                        value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.name && errors.name && <div className={styleForm.errors}>{errors.name}</div>}
                    </div>

                    <div className={styleForm.formItem}>
                        <label htmlFor="aula" className={styleForm.formSubtitle}>Aula</label>
                        <Field as="select" name="aula" className={inputCss.purpleInput}
                            value={values.aula} onChange={handleChange} onBlur={handleBlur}>
                            <option value="" selected>Aula</option>
                            <option value="1">Aula 12</option>
                            <option value="2">Aula 22</option>
                            <option value="3">Aula 433</option>
                        </Field>
                        {touched.aula && errors.aula && <div className={styleForm.errors}>{errors.aula}</div>}
                    </div>
                    
                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="note" className={styleForm.formSubtitle}>Nota base</label>
                            <input 
                            type="number" id="note" name="note" placeholder="10" className={inputCss.purpleInput}
                            value={values.note} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.note && errors.note && <div className={styleForm.errors}>{errors.note}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="code" className={styleForm.formSubtitle}>Código</label>
                            <input 
                            type="text" id="code" name="code" placeholder="Apellidos" className={inputCss.purpleInput}
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

export default FormActivities