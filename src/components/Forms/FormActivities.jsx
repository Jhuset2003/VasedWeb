//components
import { Formik,  Field } from 'formik';

//styles
import styleForm from './styles/FormUsers.module.css'
import inputCss from '../../styles/Inputs.module.css';
import btn from '../../styles/Buttons.module.css';

//react
import { useContext } from 'react';
import { createTask } from '../../services/task';
import { GlobalContext } from '../../context/GlobalContext';

const FormActivities = ({setOpenModal, openModal}) => {

    const { dispatch } = useContext(GlobalContext);

    const handleSubmitCustom = async (values) => {
        const resp = await createTask(values);
        if(resp.status !== 200 && resp.status !== 204){
            console.log('error')
            return
          }
        dispatch ({
            type: "ADD_TASK",
            payload: resp.data
        })
        setOpenModal(false);
        console.log(resp)
    }

  return (
    <>
        <Formik
        initialValues={{
        aula: "",
        name: "",
        code: "",
        description: "",
        baseScore: "",
        }}
        validate={(valores) =>{
        let errores = {};
        
        if(!valores.name){
            errores.name = 'Ingrese nombres'
        }
        if(!valores.baseScore){
            errores.baseScore= 'Ingrese capacidad'
        }
        
        if(!valores.code){
            errores.code = 'Ingrese un código'
        }
        if(!valores.description){
            errores.description = 'Ingrese una desccripción'
        }
        return errores;
       
        }}
        
        onSubmit={(valores)=>{
        handleSubmitCustom(valores)
        console.log("Sended") 
        }}>
        {( {values, handleSubmit, errors, touched, handleChange, handleBlur} ) => (
            <div className={styleForm.formContainer}>
                <form className={styleForm.form} onSubmit={handleSubmit}>

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
                            <option value="" disabled>Elija un aula</option>
                            <option value="1">Aula 12</option>
                            <option value="2">Aula 22</option>
                            <option value="3">Aula 433</option>
                        </Field>
                    </div>
                    
                    <div className={styleForm.flexItem}>
                        <div className={styleForm.formItem}>
                            <label htmlFor="baseScore" className={styleForm.formSubtitle}>Nota base</label>
                            <input 
                            type="number" id="baseScore" name="baseScore" placeholder="10" className={inputCss.purpleInput}
                            value={values.baseScore} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.baseScore && errors.baseScore && <div className={styleForm.errors}>{errors.baseScore}</div>}
                        </div>
                        <div className={styleForm.formItem}>
                            <label htmlFor="code" className={styleForm.formSubtitle}>Código</label>
                            <input 
                            type="number" id="code" name="code" placeholder="0101" className={inputCss.purpleInput}
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