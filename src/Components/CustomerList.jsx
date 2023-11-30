import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CustomerModal from './CustomerModal';

const columns = [
    { field: 'companyName', headerName: 'Name', flex: 2},
    { field: 'tenantId', headerName: 'Tenant-id', flex: 2},
    { field: 'country', headerName: 'Country', flex: 1},
    { field: 'cvrNumber', headerName: 'CVR', flex: 1},
    { field: 'status', headerName: 'Status', flex: 1},
    { field: 'licenstype', headerName: 'License', flex: 1},
    { field: 'users', headerName: 'Users', flex: 1},
  ];

function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [customerData, setCustomerData] = useState({});

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
      <div style={{ height: 358}}>
        {
          customers && <DataGrid
            rows={customers || []}
            columns={columns}
            density="standard"            
            rowHeight={50}
            // Parse the params to the new component to edit the values and send
            onRowDoubleClick={({ row }) => {
              setModalOpen(true);
              setCustomerData(row)
              console.log(row)
            }}
            hideFooter
          />
        }
      </div>
        {
          customerData.id &&
          <CustomerModal 
          modalOpen={modalOpen} 
          setModalOpen={setModalOpen} 
          customerData={customerData}
          setCustomerData={setCustomerData} 
          customers={customers} 
          setCustomers={setCustomers}
          />
        } 
    </>
  )
}

export default CustomerList