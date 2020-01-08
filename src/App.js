import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import Footer from './components/footer/Footer';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <NavigationBar />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
