import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SessionContext } from "../../context/SessionContext";
import search from "./styles/Search.module.css";

const Search = ({setSearch, searchValue}) => {

  const { user } = useContext(SessionContext);

  return (
    <div className={search.center}>
      <div className={search.positions}>
        <FaSearch className={search.icon} />
        <input
          className={search.inputStyle}
          type="text"
          placeholder={user.role === 1 || user.role === 2 ? "Filtrar por Nombre / Código / Descripción" : "Filtrar por Nombre"}
          value={searchValue}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
