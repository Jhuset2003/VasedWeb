import React from 'react'
import Select from "react-select";
import search from './styles/Search.module.css';


const SelectField = ({selections}) => {
  return (
    <div className={search.select_size}>
        <Select
        defaultValue={selections[0]}
        options ={ selections.map(sup => ({ label: sup.nombre, value: sup.id })) }
        />
    </div>
  )
}

export default SelectField
