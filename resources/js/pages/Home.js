import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
// helpers
import { deleteUser } from '../helpers/user';

const msgDelete = 'Are you sure you want to delete this user?';

export default function Home() {
  const [users, setUsers] = useState([]); 

  const getUsers = async () => {
    axios.get('api')
    .then( response => {
        setUsers(users => response.data);
    }, [])
    .catch(e => console.error(e));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'email', headerName: 'Email', width: 250},
    {
      field: 'delete',
      headerName: 'Remove',
      width: 150,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
          return <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => deleteUser(params.id, msgDelete, getUsers)}>Delete</Button>
      }
    },
  ];
  
  
  
  useEffect( () => {
    getUsers();
  }, []);  

  if (users){
      return (
        <div style={{ height: '100%', width: '100%' }}>
        <div>
            
        </div>
        <DataGrid
            rows={users}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
        />
        </div>
      )
  }

  return (
      <h1>Loading...</h1>
  )
}