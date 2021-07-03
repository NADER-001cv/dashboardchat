import * as React from "react";
import "./datatable.css";
import { DataGrid } from "@material-ui/data-grid";

import * as Icon from "react-feather";

const columns = [
  { field: "id", headerName: "Paid", width: 140 },
  { field: "Name", headerName: "Name", width: 150 },
  { field: "company", headerName: "Company", width: 150 },
  { field: "type", headerName: "Type", width: 150 },
  { field: "Amount", headerName: "Amount", width: 150 },
  { field: "Status", headerName: "Status", width: 150 },
  {
    field: "option",

    headerClassName: "mx-3 p-0 text-center",
    headerName: "Options",

    width: 140,
    renderCell: (params) => (
      <div className="d-flex justify-content-between text-end mx-2 ms-5  w-100  coloricon">
        <Icon.Edit2 height="15" width="15" />
        <Icon.MessageSquare height="15" width="15" />
        <Icon.X height="15" width="15" color="red" />
      </div>
    ),
  },
];

const rows = [
  {
    id: "1",
    Name: "Marketing",
    company: "Wilmar",
    type: "service",
    Amount: "$ 100",
    Status: "Pending",
  },
  {
    id: "2",
    Name: "Planning",
    company: "Wilmar",
    type: "Service",
    Amount: "$ 100",
    Status: "Success",
  },
  {
    id: "3",
    Name: "Financial",
    company: "Amazon",
    type: "Consult",
    Amount: "$ 50",
    Status: "Pending",
  },
  {
    id: "4",
    Name: "Trade",
    company: "Wilmar",
    type: 'service',
    Amount: "$ 100",
    Status: "Pending",
  },
  {
    id: "5",
    Name: "Trade",
    company: "Amazon",
    type: 'service',
    Amount: "$ 100",
    Status: "Success",
  },
  {
    id: "6",
    Name: "Planning",
    company: 'Wilmar',
    type: 'Consult',
    Amount: "$ 50",
    Status: "Pending",
  },
];
export default function DataTable() {
  return (
    <div className="container ms-2">
      <div
        style={{
          height: 400,
          width: "97vw",
          marginRight: "0px",
          background: "white",
        }}
      >
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </div>
    </div>
  );
}
