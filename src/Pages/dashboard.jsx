import { useContext } from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import AuthContext from '../PrivaterRoute/AuthContext';
import CustomerList from '../Components/CustomerList';

function Dashboard() {

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <>
        <Container>
          
          <CustomerList />

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