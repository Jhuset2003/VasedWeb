import React, { createContext, useReducer, useState } from 'react';
import rowsStyles from '../components/Tables/TableParts/Rows.module.css'
export const UserContext = createContext();
import {Link} from 'react-router-dom'
import BtnStyles from "../styles/Buttons.module.css"

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(
        {
            id: 1,
            name: 'Rodrigo Vased',
            role: 1,
        }
    )

   return(
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
   )
}

const ColumnsData = {
    dataList:[
        {   
            id:1,
            Header: "Código",
            accessor: "col1",
            type:"numeric"
          },
          {
            id:2,
            Header: "Nombre",
            accessor: "col2"
          },
          {
            id:3,
            Header: "Acciones",
            accessor: "col3"
          },
     
          {
            id:4,
            Header: "Rol",
            accessor: "col4",
          },
          {
            id:4,
            Header: "Ultimo Ingreso",
            accessor: "col5"
          },
          {
            id:5,
            Header: "Creado",
            accessor: "col6"
          }
    ]
    
}

export const ColumnsC = createContext(ColumnsData)
export const ColumnsProvider = ({children}) => {
    const [DataColumn, setDataColumn] = useState(ColumnsData)
    
    return(
        <ColumnsContext.Provider value={{dataList:DataColumn.dataList}}>
            {children}
        </ColumnsContext.Provider>
    )
}






