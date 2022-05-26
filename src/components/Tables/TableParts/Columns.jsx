import { useContext, useMemo } from "react";
import { UserContext, ColumnsC } from "../../../context/GlobalContext";

export default function useColumns() {
    const { user } = useContext(UserContext);
    const { dataList } = useContext(ColumnsC);

    const columns = useMemo(
        () => [
            {  Header: "Código", accessor: "id" },
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
        []
    );

    return columns;
}
