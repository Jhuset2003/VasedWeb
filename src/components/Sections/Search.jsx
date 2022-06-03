import { FaSearch } from "react-icons/fa";
import search from "./styles/Search.module.css";

const Search = ({setSearch, searchValue}) => {

  return (
    <div className={search.center}>
      <div className={search.positions}>
        <FaSearch className={search.icon} />
        <input
          className={search.inputStyle}
          type="text"
          placeholder="Nombre Actividad/Codigo"
          value={searchValue}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
