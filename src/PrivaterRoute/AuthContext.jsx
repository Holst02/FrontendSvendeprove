import React from 'react';

const AuthContext = React.createContext({
  loggedIn: false,
  username: null,
  password: null,
  login: () => {},
  // logout: () => {}
})

export default AuthContext;