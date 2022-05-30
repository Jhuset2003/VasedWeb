import { useContext, useMemo } from "react";
import { RowsC } from "../../../context/GlobalContext";

export default function useRows() {

   const {dataList} = useContext(RowsC)
   const proccedData = dataList.map((Info)=>{
      return{
         id:Info.id,
         nombre:Info.nombre,
         acciones:Info.acciones,
         rol:Info.rol,
         ultimo_ingreso:Info.ultimo_ingreso,
         creado:Info.creado
      }
   })

 const rows = useMemo(
   () => proccedData,[]
 );

 return rows;
}