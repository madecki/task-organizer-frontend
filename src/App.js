import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginView from './Components/LoginView/LoginView';
import RegistrationView from './Components/RegistrationView/RegistrationView';

library.add(fab, faEnvelope, faLock, faFacebookF, faGoogle, faUser);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginView />
          </Route>
          <Route path='/registration'>
            <RegistrationView />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
