import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { privatePostData, privateDataFetch } from '../../redux/middlewares';
import { makeTransactionAction } from '../../redux/actions/transactions';

import DashboardComponent from '../../components/dashboard/dashboard';
import NavigationBar from '../../components/navigationBar/NavigationBar';
import Footer from '../../components/footer/Footer';
import fetchAccountsAction from '../../redux/actions/accounts';


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '52',
      type: '',
      amount: '',
      isLoading: false
    };
  }

  componentDidMount () {
    this.getAccountsData();
  }

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  getAccountsData = async () => {
    this.toggleState('isLoading', this.state.isLoading);
    const { privateDataFetch } = this.props;
    await privateDataFetch('/account/', fetchAccountsAction);
    this.toggleState('isLoading', this.state.isLoading);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { privatePostData } = this.props;
    const { account, type, amount} = this.state;
    const data = { account, type, amount};

    const response = await privatePostData('/transactions/', makeTransactionAction, 'post', data);
    // eslint-disable-next-line no-unused-expressions
    response && response.error && (
      toast.error('Transaction failed, please try again', { autoClose: 3500, hideProgressBar: false })
    );
    // eslint-disable-next-line no-unused-expressions
    response && response.data && (
      toast.success('Transaction Successful', { autoClose: 3500, hideProgressBar: false })
    );
  }

  render() {
    const { type, isLoading } = this.state;
    const { accounts } = this.props;
    return (
      <>
        <NavigationBar isAuthenticated/>
        <DashboardComponent 
          accounts={accounts}
          isLoading={isLoading}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          type={type}
          />
        <Footer />
      </>
    );
  };
};

const actionCreators = {
  privatePostData,
  privateDataFetch
} 

const mapStateToProps = state => {
  return {
    transactionSuccess: state.transactionsReducer.transactionSuccess,
    accounts: state.fetchAccountsReducer.payload,
    user: state.loginReducer.payload,
  };
};

Dashboard.propTypes = {
  transactionSuccess: PropTypes.object,
  privateDataFetch: PropTypes.func,
  makeTransactionAction: PropTypes.func,
  privatePostData: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  transactionSuccess: {},
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Dashboard);

