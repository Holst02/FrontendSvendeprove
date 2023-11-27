import React, { useContext } from 'react';
import { Button, Container, Stack, TextField, Alert, Paper } from '@mui/material';
import AuthContext from '../PrivaterRoute/AuthContext';

function LoginPage({ handleLogin, error }) {

    const { username, password, setUsername, setPassword } = useContext(AuthContext);

    return (
        <Container maxWidth='sm' >
            <Paper 
                sx={{ padding: 4,
                    marginTop: '30px'
                }}
                elevation={3}
            >

            <form onSubmit={handleLogin}>
                <Stack spacing={2} direction={'column'}>
                    <h1>Login</h1>
                    <TextField 
                        id='username'
                        label='Username'
                        type='text'
                        value={username || ''} // Use an empty string if password is null
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField 
                        id='password'
                        label='Password'
                        type='password'
                        value={password || ''} // Use an empty string if password is null
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {error && (
                        <Alert severity='error'>
                        {error}
                        </Alert>
                    )}
                    <Button
                        variant='contained'
                        type='submit'>
                        Login
                    </Button>
                </Stack>
            </form>

            </Paper>
        </Container>
    )
}

export default LoginPage;