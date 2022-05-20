import React from 'react'
import {FaSearch} from 'react-icons/fa'
import search from './styles/Search.module.css'

const Search = () => {
  return (

    <div className={search.center}>
    <div className={search.selectors}>
        <select name="filter" id="" className={search.selectcenter}>
            <option value="">Fecha</option>
            <option value="">Mas reciente</option>
            <option value="">Ultima semana</option>
            <option value="">Ultimo mes</option>
        </select>
        <select name="filter" id="" className={search.selectcenter}>
            <option value="">Rol</option>
            <option value="">Administrador</option>
            <option value="">Profesor</option>
            <option value="">Estudiantes</option>
        </select>
    </div>
    <div className={search.positions}>
        <FaSearch className={search.icon}/>
        <input
        className={search.inputStyle}
        type="text"
        placeholder="Nombre Actividad/Codigo"
        />
    </div>
    </div>
  )
}

export default Search