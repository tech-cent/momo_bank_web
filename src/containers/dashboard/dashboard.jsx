import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { privatePostData } from '../../redux/middlewares';
import DashboardPage from '../../components/dashboard/dashboardPage';
import { makeTransactionAction } from '../../redux/actions/transactions';


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '52',
      type: '',
      amount: '',
    };
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
    const { type } = this.state;
    return (
      <DashboardPage
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        type={type}
      />
    )
  }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({makeTransactionAction, privatePostData}, dispatch);

const mapStateToProps = state => {
  return {
    transactionSuccess: state.transactionsReducer.transactionSuccess,
  };
};

Dashboard.propTypes = {
  transactionSuccess: PropTypes.object,
  makeTransactionAction: PropTypes.func.isRequired,
  privatePostData: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  transactionSuccess: {},
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Dashboard);
