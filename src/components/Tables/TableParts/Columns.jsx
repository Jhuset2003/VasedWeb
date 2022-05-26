import { useContext, useMemo } from "react";
import { UserContext,ColumnsC } from "../../../context/GlobalContext";

export default function useColumns() {
  const {user} = useContext(UserContext)
  const {dataList} = useContext(ColumnsC)
  

 const columns = useMemo(
   () => dataList.map(info =>
    [{
      Header:info.Header,
      accessor:info.accessor,
      type:info.type
    }]
    ),
   [dataList]
 );

 return columns;
}
