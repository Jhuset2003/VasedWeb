import { useMemo } from "react";
import BtnStyles from '../../../styles/Buttons.module.css'
import rowsStyles from './Rows.module.css'
import {Link} from 'react-router-dom'

export default function useRows() {
 const rows = useMemo(
   () => [
     {
        id:456789,
        nombre:"Adam B Schiff",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Estudiante",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:234567,
        nombre:"Elquin Arroyo",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:37890,
        nombre:"Paco Gracia",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:212123,
        nombre:"Esmeralda Tobon",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Estudiante",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:45678,
        nombre:"Lola nuñez",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:8765,
        nombre:"Vanesa Beltran",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:65432,
        nombre:"Daniel Espitia",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:76564,
        nombre:"Camilo Corrales",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:78903,
        nombre:"Leonor Pedroza",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     {
        id:105678,
        nombre:"Patricia Perez",
        acciones: <div className={rowsStyles.center}>
         <Link to="/detalle-usuario">
           <button className={BtnStyles.BtnPurple}> Ver más </button>
        </Link>
         <button className={BtnStyles.BtnDelete}> Eliminar </button>
        </div>,
        rol:"Profesor",
        ultimo_ingreso: "20/04/2022",
        creado: "02/02/2021",
     },
     
     
   ],
   []
 );

 return rows;
}
