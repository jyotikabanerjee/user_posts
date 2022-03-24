import React, { createContext, useContext, useState, useEffect } from 'react';
import { Container } from 'react-bulma-components';
import Users from './pages/Users';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useUsersGet } from './hooks/get-hooks';

// let UsersContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Container className="is-flex is-vcentered my-20">
        {/* <UsersContext.Provider value={users}> */}
        <Users />
        {/* </UsersContext.Provider> */}
      </Container>
    </div>
  );
}

export default App;