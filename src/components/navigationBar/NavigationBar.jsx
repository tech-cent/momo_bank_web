import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.scss';
import img from '../../assets/images/mtn_logo.gif';

class NavigationBar extends Component {

  handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.replace('/')
  }

  render() {
    const token = localStorage.getItem('token');
    const appNavbar = (
      <Navbar  collapseOnSelect expand="lg" fixed="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand expand="lg" href="/">
            <img width="45px" src={img} alt="MTN" scale="0" />
            &nbsp; momo bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {!token ? (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">SignUp</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/dashboard">My Accounts</Nav.Link>
                  <Nav.Link href="/dashboard">Transactions</Nav.Link>
                  <Nav.Link href="#"><button className="logout-btn" onClick={this.handleClick}>Logout</button></Nav.Link>
                </>
              )}
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
