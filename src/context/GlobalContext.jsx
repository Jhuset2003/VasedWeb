import React, { createContext, useReducer, useState } from "react";
import rowsStyles from "../components/Tables/TableParts/Rows.module.css";

import { Link } from "react-router-dom";
import BtnStyles from "../styles/Buttons.module.css";




export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: 1,
        name: "Rodrigo Vased",
        role: 1,
    });

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};





const ColumnsData = {
    dataList: [
        {
          Header: "Código",
          accessor: "id",
          type:"numeric"
        },
        {
          Header: "Nombre",
          accessor: "nombre"
        },
        {
          Header: "Acciones",
          accessor: "acciones"
        },
   
        {
          Header: "Rol",
          accessor: "rol",
        },
        {
          Header: "Ultimo Ingreso",
          accessor: "ultimo_ingreso"
        },
        {
          Header: "Creado",
          accessor: "creado"
        }
      ]
    
}

export const ColumnsC = createContext(ColumnsData)
export const ColumnsProvider = ({children}) => {
    const [DataColumn, setDataColumn] = useState(ColumnsData)
    
    return(
        <ColumnsC.Provider value={{dataList:DataColumn.dataList}}>
            {children}
        </ColumnsC.Provider>
    );
};


const rowsData = {
    dataList: [
        {
            id:456789,
            nombre:"Adam B Schiff",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Estudiante",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:234567,
            nombre:"Elquin Arroyo",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:37890,
            nombre:"Paco Gracia",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:212123,
            nombre:"Esmeralda Tobon",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Estudiante",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:45678,
            nombre:"Lola nuñez",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:8765,
            nombre:"Vanesa Beltran",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:65432,
            nombre:"Daniel Espitia",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:76564,
            nombre:"Camilo Corrales",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:78903,
            nombre:"Leonor Pedroza",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
         {
            id:105678,
            nombre:"Patricia Perez",
            acciones: <div className={rowsStyles.center}>
             <Link to="/detalle-usuario">
               <button className={BtnStyles.BtnPurple}> Ver más </button>
            </Link>
             <button className={BtnStyles.BtnDelete}> Eliminar </button>
            </div>,
            rol:"Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
         },
      ]
    
}

export const RowsC = createContext(rowsData)
export const RowsProvider = ({children}) => {
    const [DataRow, setDataRow] = useState (rowsData)
    
    return(
        <RowsC.Provider value={{dataList:DataColumn.dataList}}>
            {children}
        </RowsC.Provider>
    );
};

