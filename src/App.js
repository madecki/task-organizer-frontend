import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginView from './Components/LoginView/LoginView';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route>
            <LoginView />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
