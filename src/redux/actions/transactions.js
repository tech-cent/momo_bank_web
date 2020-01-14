import * as types from './types';

export const makeTransactionAction = (payload) => ({
  type: types.MAKE_TRANSACTION_SUCCESS,
  payload
});
