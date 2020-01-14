import React from 'react';
import { Container } from 'react-bootstrap';
import './LandingPage.scss';
import icon from '../../assets/images/google-play-store.svg';
import themeImage from '../../assets/images/MTN-Mobile-Money-outlet.jpeg';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/Footer';

const LandingPage = () => {
  return (
    <>
      <NavigationBar/>
      <Container>
        <div className="row  body-container">
          <div className="col-md-5 landing-page-details">
            <h1>MTN momo Bank</h1>
            <p className="paragraph-text">
              The mobile money - bank integration solution <br />
              Make transfers from mobile money to your bank account as often as you wish.
              Once the money is transfered, you are able to make investments to earn profits<br/><br/>
              Take up investment opportunities such as fixed deposit accounts with great interest rates <br/><br/><br/>
            </p>
            <h5>Join us today</h5>
            <a href="https://play.google.com" rel="noopener noreferrer" target="_blank">
              <img className="google-play-store-icon" src={icon} alt="Link to Android App" scale="0" />
            </a>
          </div>
          <div className="col-md-5 landing-page-details">
            <img className="momo-bank-theme-image" src={themeImage} alt="Momo Bank" scale="0" />
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  );
}

export default LandingPage;
