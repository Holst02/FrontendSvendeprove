import { useState, useEffect } from 'react';
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Grow } from '@mui/material';

const columns = [
    { field: 'virksomhedsnavn', headerName: 'Name', flex: 2},
    { field: 'tenantId', headerName: 'Tenant-id', flex: 2},
    { field: 'cvrNummer', headerName: 'CVR', flex: 1},
    { field: 'status', headerName: 'Status', flex: 1},
    { field: 'licenstype', headerName: 'License', flex: 1},
  ];

function Dashboard() {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const response = await fetch(`https://svendeprovecorewebapp.azurewebsites.net/api/customer/list`)
    .catch(error => {
      console.error(error.message);
    });
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    // fetch('https://random-data-api.com/api/users/random_user?size=10')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     setUsers(data);
    //     console.log(data)
    //   })
    //   .catch(error => {
    //     console.error(error.message);
    //   })

    getUsers();
  }, [])

  return (
    <>
        <Container>
          {
            users && <DataGrid
            rows={users || []}
            columns={columns}
            density="standard"            
            rowHeight={50}
            autoHeight={true}
            expandable={true}
            hideFooter
            />
          }
        </Container>
    </>
  )
}

export default Dashboard