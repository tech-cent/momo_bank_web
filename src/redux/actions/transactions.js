import * as types from './types';

export const makeTransactionAction = (payload) => ({
  type: types.MAKE_TRANSACTION_SUCCESS,
  payload
});

export const fetchTransactionAction = (payload) => ({
  type: types.FETCH_TRANSACTION,
  payload
});
