import { FaSearch } from "react-icons/fa";
import SelectField from "./SelectField";
import search from "./styles/Search.module.css";

const Search = () => {

  const fecha = ["Fecha","Mas recientes", "Mas antiguos"];

  const rol = ["Roles","Todos", "Administrador", "Profesor", "Alumno"];

  return (
    <div className={search.center}>
      <div className={search.selectors}>
        <SelectField selections={fecha}/>
        <SelectField selections={rol}/>
      </div>
      <div className={search.positions}>
        <FaSearch className={search.icon} />
        <input
          className={search.inputStyle}
          type="text"
          placeholder="Nombre Actividad/Codigo"
        />
      </div>
    </div>
  );
};

export default Search;
