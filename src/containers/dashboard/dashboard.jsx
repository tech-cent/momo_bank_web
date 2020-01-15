import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { privatePostData, privateDataFetch } from '../../redux/middlewares';
import { makeTransactionAction } from '../../redux/actions/transactions';
import DashboardComponent from '../../components/dashboard';
import fetchAccountsAction from '../../redux/actions/accounts';
import { fetchTransactionAction } from '../../redux/actions/transactions';


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      type: '',
      amount: '',
      isLoading: false
    };
  }

  componentDidMount () {
    this.getAccountsData();
  }

  componentDidUpdate (nextProps) {
    const { accounts } = nextProps;
    if (accounts && accounts.length) {
      this.getTransactionsData(accounts[0].id);
    }
  }

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  getTransactionsData = async (accountId) => {
    const { privateDataFetch } = this.props;
    await privateDataFetch(`/account/${accountId}/transactions/`, fetchTransactionAction);
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
    const { accounts, transactions } = this.props;
    return (
      <DashboardComponent
        accounts={accounts}
        isLoading={isLoading}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        type={type}
        transactions={transactions}
      />
    );
  };
};

const actionCreators = {
  privatePostData,
  privateDataFetch
} 

const mapStateToProps = state => {
  return {
    makeTransactionSuccess: state.transactionsReducer.makeTransactionSuccess,
    accounts: state.fetchAccountsReducer.payload,
    user: state.loginReducer.payload,
    transactions: state.transactionsReducer.fetchTransaction,
  };
};

Dashboard.propTypes = {
  makeTransactionSuccess: PropTypes.object,
  transaction: PropTypes.object,
  privateDataFetch: PropTypes.func,
  makeTransactionAction: PropTypes.func,
  privatePostData: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  makeTransactionSuccess: {},
  transaction: {},
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Dashboard);

