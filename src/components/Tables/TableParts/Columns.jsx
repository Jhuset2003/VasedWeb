import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "ID",
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
   ],
   []
 );

 return columns;
}
