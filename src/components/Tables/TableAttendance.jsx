import { useTable, usePagination,useGlobalFilter  } from "react-table";
import useRows from "./TableParts/Rows";
import useColumns from "./TableParts/Columns";
import TableStyles from "./TableAttendance.module.css"
import { MdOutlineDoubleArrow } from "react-icons/md";

import BtnStyles from "../../styles/Buttons.module.css"
import {React} from 'react'
import {FaSearch} from 'react-icons/fa'
import search from '../Sections/styles/Search.module.css'



export default function TableAttendance() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 5,
        pageIndex: 0
      }
    },useGlobalFilter,
    usePagination
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    setGlobalFilter,
    previousPage,
    state: { pageIndex,globalFilter }
  } = table;


  return (
    <div className={TableStyles.container}>
        
        <div className={TableStyles.InputContainer}>
        <div className={search.positions}>
          <FaSearch className={search.icon}/>
          <input
          onChange={e => setGlobalFilter(e.target.value)}
          value={globalFilter || ""}
          className={search.inputStyle}
          type="text"
          placeholder="Nombre Actividad/Código"
          />
        </div>
           {/*  <input
            type="text"
            value={globalFilter || ""}
            onChange={e => setGlobalFilter(e.target.value)}
            className={TableStyles.FilterTable}
            placeholder="Nombre Actividad/Codigo"
          /> */}
        </div>
        
      <table {...getTableProps()}>
      <thead>
         {
           headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {
                 headerGroup.headers.map((column) => (
                   <th {...column.getHeaderProps()}>
                     {
                       column.render("Header")
                     }
                   </th>
                 ))
               }
             </tr>
           ))
         }
       </thead>

        <tbody className={TableStyles.Tbody} {...getTableBodyProps()}>
          {
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className={TableStyles.pagination}>
          <button className={TableStyles.button} onClick={() => previousPage()} disabled={!canPreviousPage}>
            <MdOutlineDoubleArrow className={TableStyles.pageControllerleft} />
          </button>{" "}
          <span>
          Página&nbsp;
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
          <button className={TableStyles.button} onClick={() => nextPage()} disabled={!canNextPage}>
            <MdOutlineDoubleArrow className={TableStyles.pageController} />
          </button>{" "}
      </div>
    </div>
  );
}