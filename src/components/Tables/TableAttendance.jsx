import { useTable, usePagination } from "react-table";
import useRows from "./TableParts/Rows";
import useColumns from "./TableParts/Columns";
import TableStyles from "./TableAttendance.module.css"
import { MdOutlineDoubleArrow } from "react-icons/md";
import BtnStyles from "../../styles/Buttons.module.css"


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
    },
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
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = table;

  return (
    <div className={TableStyles.container}>
        <div className={TableStyles.Letters}>
            <h1>Estudiantes Aula 1 </h1>
            <button className={BtnStyles.BtnPurple}> Crear Asistecia </button>
        </div>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody className={TableStyles.Tbody} {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
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
