import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store/store';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Footer from './components/footer/Footer';
import NavigationBar from './components/navigationBar/NavigationBar';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <ToastContainer />
        <NavigationBar />
        <Routes />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
