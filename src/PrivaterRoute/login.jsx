import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import Dashboard from '../Pages/dashboard';
import LoginPage from '../Pages/loginPage';

function Login() {

    const { loggedIn, username, password, login } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const userObject = {
            'userName': username,
            'password': password
        }

        const validateUser = async (userData) => {
            const response = await fetch(`https://svendeprovecorewebapp.azurewebsites.net/inventiouser/validate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .catch(error => {
              console.error(error.message);
            });

            const data = await response;

            if (data.ok) {
                login();
            } else if (!data.ok) {
                setError('Invalid username or password');
            }
            
        }


        validateUser(userObject)
    }

    return (
        <>
            {loggedIn ? (
                <Dashboard />
            ) : (
                <LoginPage 
                    handleLogin={handleLogin} 
                    error={error}
                />
            )}
        </>
    )
}

export default Login;