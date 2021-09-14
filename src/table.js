import React, { useMemo } from "react";
import "./table.css";
import Mocdata from "./MOCK_DATA (1).json";
import { columns } from "./columns";
import { useTable, useFilters } from "react-table";

function Table() {
  const data = useMemo(() => Mocdata, []);
  const column = useMemo(() => columns, []);
  const tableInstance = useTable(
    {
      columns: column,
      data: data,
    },
    useFilters
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                <div style={{ width: "100%", marginBottom: 10 }}>
                  {column.canFilter ? column.render("Filter") : null}
                </div>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
