import React, { createContext, useReducer, useState } from "react";
import rowsStyles from "../components/Tables/TableParts/Rows.module.css";
export const UserContext = createContext();
import { Link } from "react-router-dom";
import BtnStyles from "../styles/Buttons.module.css";

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
        { id: "col1", 
        Header: "Código", accessor: "id" },
        {
            id: "col2",
            Header: "Nombre",
            accessor: "nombre",
        },
        {
            id: "col3",
            Header: "Acciones",
            accessor: "acciones",
        },

        {
            id: "col4",
            Header: "Rol",
            accessor: "rol",
        },
        {
            id: "col5",
            Header: "Ultimo Ingreso",
            accessor: "ultimo_ingreso",
        },
        {
            id: "col6",
            Header: "Creado",
            accessor: "creado",
        },
    ],
};

export const ColumnsC = createContext(ColumnsData);
export const ColumnsProvider = ({ children }) => {
    const [dataColumn, setDataColumn] = useState(ColumnsData);

    return (
        <ColumnsContext.Provider value={{ data: dataColumn.Data }}>
            {children}
        </ColumnsContext.Provider>
    );
};
