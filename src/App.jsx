import Dashboard from './Pages/dashboard';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from './PrivaterRoute/AuthContext';
import PrivateRoutes from './PrivaterRoute/PirvateRoutes';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userid, setUserid] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    setLoggedIn(true);
  }

  const logout = () => {
    setLoggedIn(false);
  }

  return (
    <Router>
      <AuthContext.Provider value={{ loggedIn, username, password, setUsername, setPassword, setUserid, login, logout }}>
        {/* <PrivateRoutes /> */}
        <Dashboard />
      </AuthContext.Provider>
    </Router>
  )
}

export default App
