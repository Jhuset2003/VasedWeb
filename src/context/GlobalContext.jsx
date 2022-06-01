import GlobalReducer from "../reducers/GlobalReducer";
import { v4 } from "uuid";
import React, { createContext, useReducer, useState } from "react";
import rowsStyles from "../components/Tables/TableParts/Rows.module.css";

import { Link } from "react-router-dom";
import BtnStyles from "../styles/Buttons.module.css";

/* start user context */
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: 1,
        name: "Rodrigo Vased",
        role: 1,
    });

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};
/* end user context */
/* start columns data */
const ColumnsData = {
    dataList: [
        {
            Header: "Código",
            accessor: "id",
            type: "numeric",
        },
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
};

export const ColumnsC = createContext(ColumnsData);
export const ColumnsProvider = ({ children }) => {
    const [DataColumn, setDataColumn] = useState(ColumnsData);

    return (
        <ColumnsC.Provider value={{ dataList: DataColumn.dataList }}>
            {children}
        </ColumnsC.Provider>
    );
};
/* end columns data */
/* start Rows data */
const rowsData = {
    dataList: [
        {
            id: 456789,
            nombre: "Adam B Schiff",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Estudiante",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 234567,
            nombre: "Elquin Arroyo",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 37890,
            nombre: "Paco Gracia",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 212123,
            nombre: "Esmeralda Tobon",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Estudiante",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 45678,
            nombre: "Lola nuñez",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 8765,
            nombre: "Vanesa Beltran",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 65432,
            nombre: "Daniel Espitia",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 76564,
            nombre: "Camilo Corrales",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 78903,
            nombre: "Leonor Pedroza",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
        {
            id: 105678,
            nombre: "Patricia Perez",
            acciones: (
                <div className={rowsStyles.center}>
                    <Link to="/detalle-usuario">
                        <button className={BtnStyles.BtnPurple}>
                            {" "}
                            Ver más{" "}
                        </button>
                    </Link>
                    <button className={BtnStyles.BtnDelete}> Eliminar </button>
                </div>
            ),
            rol: "Profesor",
            ultimo_ingreso: "20/04/2022",
            creado: "02/02/2021",
        },
    ],
};

export const RowsC = createContext(rowsData);
export const RowsProvider = ({ children }) => {
    const [DataRow, setDataRow] = useState(rowsData);

    return (
        <RowsC.Provider value={{ dataList: DataColumn.dataList }}>
            {children}
        </RowsC.Provider>
    );
};

/* end rows data */

/* start aula context */

const aulasData = {
    aulas: [
        {
            id: 1,
            capability: 100,
            name: "Aula Inglés",
            code: "Aula002",
            adminDescription:
                "El Marco Europeo ofrece una base común en Europa para la descripción explícita de los objetivos, los contenidos y la metodología de los cursos de idiomas",
            description:
                "El alumno es capaz de comprender frases y expresiones de uso frecuente relacionadas con áreas de experiencia que le son especialmente relevantes",
            createdBy: 1,
            dateEnd: "20/03/2020",
            teachers: [
                {
                    name: "Maria Velandia",
                    id: 134,
                },
            ],
            students: [
                {
                    name: "Diego Moreno",
                    id: 57,
                },
                {
                    name: "Pedro Cardona",
                    id: 324,
                },
                {
                    name: "Franco Escobar",
                    id: 334,
                },
                {
                    name: "Pedro Cardona",
                    id: 344,
                },
                {
                    name: "Rodrigo Vased",
                    id: 354,
                },
                {
                    name: "Quique Estrada",
                    id: 364,
                },
            ],
            progress: 36,
            tasks: [
                {
                    id: 1,
                    name: "Actividad 5342",
                    code: "007R",
                    fecha: "4/07/2020",
                    description:
                        "Expresión e interacción oral: al final del curso el alumno podrá utilizar vocabulario y expresiones habituales para describir temas de interés personal (la familia, el trabajo, las condiciones de vida).",
                    baseScore: 10,
                },
            ],
        },
        {
            id: 2,
            capability: 100,
            name: "Aula Español",
            code: "Aula003",
            adminDescription:
                "Esta secuencia de actividades es muy completa y comunicativa, ya que se tratan distintos temas, todos ellos relacionados con Machado y su obra poética",
            description:
                "Este conjunto de actividades tienen por objetivo proponer la explotación de diferentes temasdentro de un posible intercambio lingüístico",
            createdBy: 1,
            dateEnd: "20/03/2020",
            teachers: [
                {
                    name: "Maria Velandia",
                    id: 394,
                },
            ],
            students: [
                {
                    name: "Diego Moreno",
                    id: 507,
                },
            ],
            progress: 36,
            tasks: [
                {
                    id: 1,
                    name: "Actividad comprensión",
                    code: "007R",
                    fecha: "9/04/2020",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi",
                    baseScore: 10,
                },
                {
                    id: 2,
                    name: "Actividad Lectura",
                    code: "007R",
                    fecha: "4/03/2020",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi",
                    baseScore: 10,
                },
                {
                    id: 3,
                    name: "Actividad grupal",
                    code: "007R",
                    fecha: "2/03/2020",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi",
                    baseScore: 10,
                },
                {
                    id: 4,
                    name: "Actividad individual",
                    code: "007R",
                    fecha: "6/03/2020",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi",
                    baseScore: 10,
                },
            ],
        },
        {
            id: 3,
            capability: 100,
            name: "Aula Francés",
            code: "Aula004",
            adminDescription:
                "Esta secuencia de actividades es muy completa y comunicativa, ya que se tratan distintos temas, todos ellos relacionados con Machado y su obra poética",
            description:
                "Este conjunto de actividades tienen por objetivo proponer la explotación de diferentes temasdentro de un posible intercambio lingüístico",
            createdBy: 1,
            dateEnd: "20/03/2020",
            teachers: [
                {
                    name: "Maria Velandia",
                    id: 394,
                },
            ],
            students: [
                {
                    name: "Diego Moreno",
                    id: 507,
                },
            ],
            progress: 36,
            tasks: [
                {
                    id: 1,
                    name: "Actividad vocabulario",
                    code: "007R",
                    fecha: "20/03/2020",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi",
                    baseScore: 10,
                },
                {
                    id: 2,
                    name: "Actividad Lectura",
                    code: "007R",
                    fecha: "20/03/2020",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi",
                    baseScore: 10,
                },
                {
                    id: 3,
                    name: "Actividad Le verb Ëtre",
                    code: "007R",
                    fecha: "20/03/2020",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi",
                    baseScore: 10,
                },
            ],
        },
    ],
};
export const AulaContext = createContext(aulasData);

export const AulaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, aulasData);

    /* console.log(state)
     */
    const addAula = (aula) => {
        dispatch({
            type: "ADD_AULA",
            payload: {
                ...aula,
                id: v4(),
                capability: capability,
                name: name,
                code: code,
                adminDescription: adminDescription,
                description: description,
                createdBy: 0,
                dateEnd: null,
                teachers: [null],
                students: [null],
                progress: 0,
                tasks: [null],
            },
        });
    };

    return (
        <AulaContext.Provider value={{ aulas: state.aulas, addAula }}>
            {children}
        </AulaContext.Provider>
    );
};

const activityData = {
    activity: [
        {
            id: 1,
            name: "Actividad vocabulario",
            code: "007R",
            fecha: "20/03/2020",
            description:
                "el alumno podrá captar las ideas principales de avisos y mensajes breves y seguir conversaciones sencillas.",
            baseScore: 10,
            note: 10,
            teachers: [
                {
                    name: "Maria Velandia",
                    id: 134,
                },
            ],
            students: [
                {
                    name: "Diego Moreno",
                    id: 57,
                },
                {
                    name: "Pedro Cardona",
                    id: 324,
                },
                {
                    name: "Franco Escobar",
                    id: 334,
                },
                {
                    name: "Pedro Cardona",
                    id: 344,
                },
                {
                    name: "Rodrigo Vased",
                    id: 354,
                },
                {
                    name: "Quique Estrada",
                    id: 364,
                },
            ],
        },
        {
            id: 2,
            name: "Actividad rellenar tabla",
            code: "007R",
            fecha: "12/04/2020",
            description:
                "El alumno será capaz encontrar herramientas que lo ayuden a mejorar para encontrar información específica y relevante",
            baseScore: 5,
            note: 5,
            teachers: [
                {
                    name: "Maria Velandia",
                    id: 134,
                },
            ],
            students: [
                {
                    name: "Diego Moreno",
                    id: 57,
                },
            ],
        },
        {
            id: 3,
            name: "Actividad lectura de libro",
            code: "007R",
            fecha: "28/02/2020",
            description:
                "El alumno será capaz de leer textos sencillos, como cartas personales, menús,anuncios publicitarios y horarios, para encontrar información específica",
            baseScore: 5,
            note: 0,
            teachers: [
                {
                    name: "Ricardo Pérez",
                    id: 134,
                },
                {
                    name: "Quique Estrada",
                    id: 364,
                },
            ],
            students: [
                {
                    name: "Pedro Cardona",
                    id: 324,
                },
            ],
        },
    ],
};
export const ActivityContext = createContext(activityData);

export const ActivityProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, activityData);

    return (
        <ActivityContext.Provider value={{ activity: state.activity }}>
            {children}
        </ActivityContext.Provider>
    );
};
