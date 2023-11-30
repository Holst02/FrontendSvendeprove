import { useContext } from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import AuthContext from '../PrivaterRoute/AuthContext';
import CustomerList from '../Components/CustomerList';
import SMARTProductList from '../Components/SMARTProductList';

function Dashboard() {

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <>
        <Container>
          
          <CustomerList />

          <br></br>

          <SMARTProductList />

          <br></br>

          <Button
            variant='contained'
            type='submit'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Container>
    </>
  )
}

export default Dashboard