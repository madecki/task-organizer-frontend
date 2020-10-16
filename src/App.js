import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainView from './Components/MainView/MainView';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/app">
            <MainView />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
