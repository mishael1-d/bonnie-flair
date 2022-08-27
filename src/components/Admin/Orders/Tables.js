import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../../../ORDER_MOCK_DATA.json";
import { COLUMNS } from "./columns";

function Tables() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
 
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage,previousPage } =
  useTable({
    columns,
    data,
  }, usePagination);;
  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-white">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="text-justify font-normal">{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="space-y-4">
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}  className="py-4">
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()} className="py-2 pr-2">{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <div className="text-center">
        <button onClick={()=>previousPage()}>Prev</button>
        <button onClick={()=>nextPage()}>Next</button>
      </div>
    </table>
  );
}

export default Tables;
