import React from 'react';

const AuthContext = React.createContext({
  loggedIn: null,
  userid: null,
  username: null,
  password: null,
  login: () => {},
  logout: () => {}
})

export default AuthContext;