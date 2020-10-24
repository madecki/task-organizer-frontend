import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLock,
  faUser,
  faFlag,
  faCity,
  faHome,
  faAddressCard,
  faPhoneSquareAlt,
  faSuitcase,
  faGraduationCap,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import LoginView from './Components/LoginView/LoginView';
import RegistrationView from './Components/RegistrationView/RegistrationView';

library.add(
  fab,
  faEnvelope,
  faLock,
  faFacebookF,
  faUser,
  faFlag,
  faCity,
  faHome,
  faAddressCard,
  faPhoneSquareAlt,
  faSuitcase,
  faGraduationCap,
  faCalendarAlt
);

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
