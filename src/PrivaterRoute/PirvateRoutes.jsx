import React, { useContext } from 'react';
import AuthContext from './AuthContext'; 
import Dashboard from '../Pages/dashboard';
import Login from './login';

function PrivateRoutes() {
    const { loggedIn } = useContext(AuthContext);

    return(
        <>
            {loggedIn ? <Dashboard /> : <Login /> }
        </>
    )
}

export default PrivateRoutes;