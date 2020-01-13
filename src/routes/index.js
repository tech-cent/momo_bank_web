import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';
import Login from '../containers/authentication/login';
import SignUp from '../containers/authentication/signUp';
import Dashboard from '../containers/dashboard/dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
)

export default Routes;
