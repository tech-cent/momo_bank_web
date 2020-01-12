import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import LandingPage from '../components/landingPage/LandingPage';
import Login from '../containers/authentication/login';


const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
    </Switch>
  </Provider>
)

export default Routes;
