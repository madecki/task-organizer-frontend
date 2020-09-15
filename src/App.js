import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import LoginView from './Components/LoginView/LoginView';

library.add(fab, faEnvelope, faLock, faFacebookF, faGoogle);

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
