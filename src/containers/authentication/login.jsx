import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginComponent from '../../components/authentication/login';
import publicPostData from '../../redux/middlewares';
import { loginAction } from '../../redux/actions/authentication';


export class Login extends Component {
  state = {
    phone_number: '',
    password: '',
    isLoading: false
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  handleSubmit = async (event) => {
    this.toggleState('isLoading', this.state.isLoading);
    event.preventDefault();
    const { publicPostData } = this.props;
    const { phone_number, password } = this.state;
    const data = { phone_number, password };
    const response = await publicPostData('/login/', loginAction, 'post', data);
    // eslint-disable-next-line no-unused-expressions
    response && response.error && (
      toast.dismiss(),
      toast.error('Login failed, please try again', { autoClose: false, hideProgressBar: true }),
      this.toggleState('isLoading', this.state.isLoading)
    );
    // eslint-disable-next-line no-unused-expressions
    response && response.data && (
      toast.dismiss(),
      localStorage.setItem('token', response.data.access),
      localStorage.setItem('username', response.data.name),
      toast.success('Login successful', { autoClose: 3500, hideProgressBar: false }),
      this.toggleState('isLoading', this.state.isLoading),
      this.props.history.push('/dashboard')
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <LoginComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} isLoading={isLoading}/>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    error: state.loginReducer.error,
    payload: state.loginReducer.payload,
  };
};

export default connect(mapStateToProps, {publicPostData})(Login);

Login.propTypes = {
  publicPostData: PropTypes.func
};
