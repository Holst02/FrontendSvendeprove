import React, { useContext } from 'react';
import AuthContext from './AuthContext'; 
import Dashboard from '../Pages/dashboard';
import Login from './login';

function PrivateRoutes({children, ...rest}) {
    const { status } = useContext(AuthContext);

    return(
        <>
            {status ? <Dashboard /> : <Login /> }
        </>
    )
}

export default PrivateRoutes;