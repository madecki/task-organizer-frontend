import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
<<<<<<< Updated upstream
=======
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginView from './Components/LoginView/LoginView';
import RegistrationView from './Components/RegistrationView/RegistrationView';

library.add(fab, faEnvelope, faLock, faFacebookF, faGoogle, faUser);
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <Router>
        <Switch>
<<<<<<< Updated upstream
          <Route />
=======
          <Route exact path='/'>
            <LoginView />
          </Route>
          <Route path='/registration'>
            <RegistrationView />
          </Route>
>>>>>>> Stashed changes
        </Switch>
      </Router>
    </>
  );
}

export default App;
