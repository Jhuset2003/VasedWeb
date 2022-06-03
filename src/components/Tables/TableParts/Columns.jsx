import { useContext, useMemo } from "react";
export default function useColumns() {

 const columns = useMemo(
   () =>  
    [
        {
            Header: "Acciones",
            accessor: "actions",
        },
        {
            Header: "Documento",
            accessor: "id",
            type: "numeric",
        },
        {
            Header: "Nombre",
            accessor: "name",
        },

        {
            Header: "Rol",
            accessor: "role",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Activo",
            accessor: "active",
        },
    ],  []
 );

 return columns;
}