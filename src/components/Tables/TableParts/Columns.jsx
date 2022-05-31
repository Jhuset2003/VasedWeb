import { useContext, useMemo } from "react";
import { ColumnsC } from "../../../context/GlobalContext";

export default function useColumns() {

const {dataList} = useContext(ColumnsC)

      const proccedData = dataList.map((Info) => {
        return{
            
            Header:Info.Header,
            accessor:Info.accessor,
            type:Info.type
        }
    } )

 const columns = useMemo(
   () =>proccedData,
   []
 );

 return columns;
}