import React from 'react';
import { Container } from 'react-bootstrap';
import './LandingPage.scss';
import icon from '../../assets/images/google-play-store.svg';
import themeImage from '../../assets/images/MTN-Mobile-Money-outlet.jpeg';

const LandingPage = () => {
  return (
    <Container>
      <div className="row  body-container">
        <div className="col-md-5 landing-page-details">
          <h1>MTN momo Bank</h1>
          <p className="paragraph-text">
            A digital bank powered by MoMo Pay, bringing convinent banking to your fingertips <br/>
            Make transfers between mobile money and your bank account as often as you wish.
            Once the money is transfered, you are able to make investments to earn profits<br/><br/>
            Take up investment opportunities such as fixed deposit accounts with great interest rates <br/><br/>
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
  );
}

export default LandingPage;
