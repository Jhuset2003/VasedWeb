import BtnStyles from "../../../styles/Buttons.module.css";
import rowsStyles from "./Rows.module.css";
import { RiDeleteBin6Line, RiEditBoxFill, RiEyeLine } from "react-icons/ri";

import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { deleteUser } from "../../../services/users";

export default function useRows() {
    const {
        state: { users },
        dispatch,
    } = useContext(GlobalContext);

    const handleDelete = async (id) => {
        const resp = await deleteUser(id);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        dispatch({
            type: "DELETE_USER",
            payload: id,
        });
    };

    const proccedData = users.map((user) => {
        return {
            actions: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            <RiEyeLine />
                        </button>
                    </Link>
                    <button
                        onClick={() => {
                            handleDelete(user.id);
                        }}
                        className={BtnStyles.BtnDelete}
                    >
                        <RiDeleteBin6Line />
                    </button>
                    <button className={BtnStyles.BtnGreen}>
                        <RiEditBoxFill />
                    </button>
                </div>
            ),
            id: user.dni,
            name: user.names + " " + user.lastNames,
            role:
                user.roleId === 1
                    ? "Admin"
                    : user.roleId === 2
                    ? "Profesor"
                    : "Estudiante",
            email: user.email,
            active: user.isActive === true ? "Si" : "No",
        };
    });

    const rows = useMemo(() => proccedData, [users]);

    return rows;
}
