import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'virksomhedsnavn', headerName: 'Name', flex: 2, editable: true },
    { field: 'tenantId', headerName: 'Tenant-id', flex: 2, editable: true},
    { field: 'cvrNummer', headerName: 'CVR', flex: 1, editable: true},
    { field: 'status', headerName: 'Status', flex: 1, editable: true},
    { field: 'licenstype', headerName: 'License', flex: 1, editable: true}
  ];

function CustomerList() {
    const [customers, setCustomers] = useState(null);

    const getCustomers = async () => {
        const response = await fetch(`https://svendeprovecorewebapp.azurewebsites.net/api/customer/list`)
        .catch(error => {
          console.error(error.message);
        });
        const data = await response.json();
    
        setCustomers(data);
    }
    
    useEffect(() => {
    getCustomers();
    }, [])

  return (
    <>
        {
            customers && <DataGrid
            rows={customers || []}
            columns={columns}
            density="standard"            
            rowHeight={50}
            autoHeight={true}
            editMode={'row'}
            hideFooter
            />
        }
    </>
  )
}

export default CustomerList