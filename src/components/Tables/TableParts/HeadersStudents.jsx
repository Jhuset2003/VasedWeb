import { useMemo } from "react";
export default function useColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "Nombre",
                accessor: "name",
            },
            {
                Header: "Documento",
                accessor: "id",
                type: "numeric",
            },
            {
                Header: "Aulas",
                accessor: "aulas",
            },
            {
                Header: "Activo",
                accessor: "active",
            },
            {
                Header: "Acciones",
                accessor: "actions",
            },
        ],
        []
    );

    return columns;
}
