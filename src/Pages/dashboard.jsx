import Container from '@mui/material/Container';
import { useState } from 'react';
import CustomerList from '../Components/CustomerList';
import SMARTProductList from '../Components/SMARTProductList';
import Topbar from '../Components/Topbar';
import CustomersChart from '../Components/CustomersChart';

function Dashboard() {
  const [customers, setCustomers] = useState([]);

  return (
    <>
        <Topbar />
        <Container>
          
          <CustomerList customers={customers} setCustomers={setCustomers} />

          <br></br>
          
          <SMARTProductList />

          <br></br>

          <CustomersChart customers={customers} />

        </Container>
    </>
  )
}

export default Dashboard