import * as types from '../actions/types';

const initialSate = {
  makeTransactionSuccess: {},
  transactionError: false,
  fetchTransaction: {},
};

const transactionsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case types.MAKE_TRANSACTION_SUCCESS:
      return {
        ...state,
        makeTransactionSuccess: action.payload,
      };
    case types.MAKE_TRANSACTION_ERROR:
      return {
        ...state,
        transactionError: action.payload,
      };
    case types.FETCH_TRANSACTION:
      return {
        ...state,
        fetchTransaction: action.payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
