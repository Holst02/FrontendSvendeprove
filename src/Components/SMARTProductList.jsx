import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'Product', flex: 1},
    { field: 'description', headerName: 'Description', flex: 2},
    { field: 'installed', headerName: 'Installed', flex: 1}
]

function SMARTProductList() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const respone = await fetch(`https://svendeprovecorewebapp.azurewebsites.net/api/smartapps/list`)

        const data = await respone.json();

        setProducts(data)
    }

    useEffect(() => {
        getProducts();
    }, [])

  return (
    <div style={{ height : 408}}>
        {
            products && <DataGrid
                rows={products || []}
                columns={columns}
                density="standard"
                rowHeight={50}
                hideFooter
            />
        }
    </div>
  )
}

export default SMARTProductList