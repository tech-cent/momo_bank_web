import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import { publicPostData } from '../../redux/middlewares';
import SignUpForm from '../../components/authentication/signUp';
import { signUpAction } from '../../redux/actions/authentication';
import NavigationBar from '../../components/navigationBar/NavigationBar';
import Footer from '../../components/footer/Footer';


export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      dateOfBirth: new Date(),
      nin: '',
      password: '',
      confirm_password: '',
      isLoading: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleChangeDate = date => {
    this.setState({
      dateOfBirth: date
    });
  };

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  handleSubmit = async (event) => {
    this.toggleState('isLoading', this.state.isLoading);
    event.preventDefault();
    const { publicPostData } = this.props;
    const { firstName, lastName, phoneNumber, dateOfBirth, nin, password, confirm_password } = this.state;

    // make variable names match with those accespted by the API
    const dob = moment(dateOfBirth).format('YYYY-MM-DD');
    const first_name = firstName;
    const last_name = lastName;
    const phone_number = phoneNumber;

    const data = { first_name, last_name, phone_number, dob, nin, password, confirm_password };

    const response = await publicPostData('/signup/', signUpAction, 'post', data);
    // eslint-disable-next-line no-unused-expressions
    response && response.error && (
      toast.dismiss(),
      toast.error('Signup failed, please try again', { autoClose: false, hideProgressBar: true }),
      this.toggleState('isLoading', this.state.isLoading)
    );
    // eslint-disable-next-line no-unused-expressions
    response && response.data && (
      toast.dismiss(),
      toast.success('Signup successful', { autoClose: 3500, hideProgressBar: false }),
      this.toggleState('isLoading', this.state.isLoading),
      this.props.history.push('/login')
    );
  }

  render() {
    const { firstName, lastName, phoneNumber, dateOfBirth, nin, password, confirm_password, isLoading, } = this.state;
    return (
      <>
        <NavigationBar/>
        <SignUpForm
          handleChange={this.handleChange}
          handleChangeDate={this.handleChangeDate}
          handleSubmit={this.handleSubmit}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          dateOfBirth={dateOfBirth}
          nin={nin}
          password={password}
          confirm_password={confirm_password}
          isLoading={isLoading}
        />
        <Footer/>
      </>
    )
  }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({signUpAction, publicPostData}, dispatch);

const mapStateToProps = state => {
  return {
    signUpSuccess: state.signUpReducer.signUpSuccess,
    signUpError: state.signUpReducer.signUpError,
  };
};

SignUp.propTypes = {
  signUpSuccess: PropTypes.object,
  signUpAction: PropTypes.func.isRequired,
  publicPostData: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  signUpSuccess: {},
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(SignUp);
