import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';
import Login from '../containers/authentication/login';
import SignUp from '../containers/authentication/signUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Routes;
