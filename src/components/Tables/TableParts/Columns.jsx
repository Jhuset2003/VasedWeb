import { useMemo } from "react";

export default function useColumns() {

  const tableStructure = {
    dataList: [
        {
            Header: "Código",
            accessor: "id",
            type: "numeric",
        },
        {
            Header: "Nombre",
            accessor: "nombre",
        },
        {
            Header: "Acciones",
            accessor: "acciones",
        },

        {
            Header: "Rol",
            accessor: "rol",
        },
        {
            Header: "Ultimo Ingreso",
            accessor: "ultimo_ingreso",
        },
        {
            Header: "Creado",
            accessor: "creado",
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