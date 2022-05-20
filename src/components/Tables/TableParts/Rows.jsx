import { useMemo } from "react";
import BtnStyles from '../../../styles/Buttons.module.css'
import rowsStyles from './Rows.module.css'
import {Link} from 'react-router-dom'

export default function useRows() {
 const rows = useMemo(
   () => [
     {
        id:1,
        nombre:"Pedro Garcia",
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
        id:2,
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
        id:3,
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
        id:4,
        nombre:"Lola vaca",
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
        id:5,
        nombre:"Lola vaca",
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
        id:6,
        nombre:"Lola vaca",
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
        id:7,
        nombre:"Lola vaca",
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
        id:8,
        nombre:"Lola vaca",
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
        id:9,
        nombre:"Lola vaca",
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
        id:10,
        nombre:"Lola vaca",
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
