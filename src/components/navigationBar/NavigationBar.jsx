import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.scss';
import img from '../../assets/images/mtn_logo.gif';

class NavigationBar extends Component {
  render() {
    const appNavbar = (
      <Navbar fixed="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand expand="lg" href="/">
            <img width="45px" src={img} alt="MTN" scale="0" />
            &nbsp; momo bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">SignUp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
    return (
      <div className="navigation-bar">
        {appNavbar}
      </div>
    )
  }
}

export default NavigationBar;
