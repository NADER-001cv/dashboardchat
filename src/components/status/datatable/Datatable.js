import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import * as Icon  from 'react-feather'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 160 },
  { field: 'lastName', headerName: 'Last name', width: 160 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 160,
  },
   {
    field: 'option',
    headerName: 'Options',
    type: 'number',
    width: 170,
     renderCell: (params) => (
      <div className="d-flex justify-content-between  w-50 ">
       <Icon.Edit2  height="15" width="15"/>
       <Icon.MessageSquare  height="15" width="15"/>
       <Icon.X  height="15" width="15" color="red" />
       
      </div>
    ),
     

    
  },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
      <div className="container mx-5">
    <div style={{ height: 400, width: '100%',marginRight:'0px'}}>
        
        
      <DataGrid rows={rows} columns={columns} checkboxSelection />
  
    </div>
      </div>
  );
}
