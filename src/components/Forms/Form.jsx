import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AulaContext } from '../../context/GlobalContext';

const Form = ({setOpenModal, openModal}) => {

    const {addAula} = useContext(AulaContext);

    const [aula, setAula] = useState({
        id: "",
        name: "",
        capability: 0,
        code: "0Xre1",
        description: "",
        adminDescription: "",
        createdBy: 1,
        teachers: [],
        students: [],
        progress: 0,
        tasks: []
                
      }
    )

    const handleChange = e =>{
        setAula({...aula, [e.target.name]: e.target.value})
        console.log(e)
    }
    useEffect(()=>{
        
    },[])


    const navigate = useNavigate();

    const onSubmit= e =>{
        e.preventDefault();
        
        addAula(aula)
        setOpenModal(false)
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="formGroupExampleInput">Nombre</label>
            <input type="text" className="form-control" name='name' id="name" value={aula.name} onChange={handleChange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">Capaciadad</label>
            <input type="number" className="form-control" name='capability' id="capability" value={aula.capability} onChange={handleChange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">Codigo</label>
            <input type="number" className="form-control" name='code' id="code" value={aula.code} onChange={handleChange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">Description</label>
            <textarea className="form-control" id="description" rows="5" name='description' value={aula.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">Description</label>
            <textarea className="form-control" id="adminDescription" rows="5" name='adminDescription' value={aula.adminDescription} onChange={handleChange} required></textarea>
        </div>
    
        <button type="submit" className="btn btn-primary">Save Article</button>

        <button type="button" className="btn">Cancel</button>
    </form>
  )
}

export default Form