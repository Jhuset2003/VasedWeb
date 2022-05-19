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
       Header: "Aula",
       accessor: "aula",
       type:"numeric"
     },
     {
       Header: "Promedio",
       accessor: "promedio"
     },
     {
       Header: "Asistencia",
       accessor: "asistencia"
     }
   ],
   []
 );

 return columns;
}
