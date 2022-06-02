import { useMemo } from "react";

export default function useColumns() {

  const tableStructure = {
    dataList: [
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
            Header: "Creado",
            accessor: "createdAt",
        },
    ],
};

      const proccedData = tableStructure.dataList.map((info) => {
        return{
            
            Header:info.Header,
            accessor:info.accessor,
            type:info.type
        }
    } )

 const columns = useMemo(
   () =>proccedData,
   []
 );

 return columns;
}