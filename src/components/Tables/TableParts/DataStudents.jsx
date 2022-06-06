import BtnStyles from "../../../styles/Buttons.module.css";
import rowsStyles from "./Rows.module.css";
import { RiEyeLine } from "react-icons/ri";

import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

export default function useRows() {

    const { state: { users }} = useContext(GlobalContext);

    const [userSave, setUserSave] = useState([]);

    useEffect(() => {
        const filterUsers = users.filter(user => user.roleId === 3); 
        setUserSave(filterUsers)
    },[users])

    
    const proccedData = userSave.map((user) => {

        return {
            actions: (
                <Link className={rowsStyles.center} to={`/detalle-usuario/${user.id}`}>
                    <button className={BtnStyles.BtnPurple}>
                        <RiEyeLine />
                    </button>
                </Link>
            ),
            id: user.dni,
            name: user.names + " " + user.lastNames,
            aulas: (
                <>
                {
                    user.classrooms.map((classroom) => {
                        return classroom.code + ", "
                    })
                }
                </>
            ),
            active: user.isActive === true ? "Si" : "No",
        };
    });

    const rows = useMemo(() => proccedData, [userSave]);

    return rows;
}
