import {
  MAKE_TRANSACTION_SUCCESS,
  MAKE_TRANSACTION_ERROR,
} from '../actions/types';

const initialSate = {
  transactionSuccess: {},
  transactionError: false,
};

const transactionsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case MAKE_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactionSuccess: action.payload,
      };
    case MAKE_TRANSACTION_ERROR:
      return {
        ...state,
        transactionError: action.payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
