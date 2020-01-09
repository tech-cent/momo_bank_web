import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.scss';


class Footer extends Component {
  render() {
    const appFooter = (
      <Navbar sticky="bottom" className="footer-bar fixed-bottom" bg="dark" variant="dark">
        <Navbar.Brand className="navbar-brand-custom" expand="lg" href="#home">tech_cent_ug 2020</Navbar.Brand>
      </Navbar>
    )
    return (
      <div>
        {appFooter}
      </div>
    )
  }
}

export default Footer;
