import React from 'react';

const AuthContext = React.createContext({
  loggedIn: false,
  userid: null,
  username: null,
  password: null,
  login: () => {},
  logout: () => {}
})

export default AuthContext;