import { useContext, useMemo } from "react";
export default function useColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "Nombre",
                accessor: "name",
            },
            {
                Header: "Rol",
                accessor: "role",
            },
            {
                Header: "Documento",
                accessor: "id",
                type: "numeric",
            },

            {
                Header: "Email",
                accessor: "email",
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
