import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import './authentication.scss';


const LoginComponent = ({handleChange, isLoading, handleSubmit}) => {
  return (
    <>
      <div className="login-form">
        <h2 className="login-form__title">Login</h2>
        <Form>
          <Form.Group controlId="phoneNumber">
            <Form.Control type="text" placeholder="phone number" name="phone_number" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="password" name="password" onChange={handleChange}/>
          </Form.Group>
          {
            !isLoading && 
            <Button variant="dark btn-block" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          }
          {
            isLoading && <div className="login-form__spinner">
              <Spinner animation="grow" />
            </div> 
          }
          <p className="login-form__link">Don't have an account?<a href="/signup">Sign Up</a></p>
        </Form>
      </div>
    </>
  )
}


export default LoginComponent
