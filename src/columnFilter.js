import React from "react";
import "./columnFilter.css";
export function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <span style={{ width: "100%" }}>
      <input
        type="text"
        placeholder="Search"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </span>
  );
}
