import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import Dashboard from '../Pages/dashboard';
import LoginPage from '../Pages/loginPage';

function Login() {

    const { loggedIn, username, password, login, setUserid } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const userObject = {
            "userName": username,
            "password": password
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

            try {
                var data = await response.json();
            } catch (error) {
                setError('Invalid username or password');
            }

            if (response.ok) {
                setUserid(data.id)
                login();
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