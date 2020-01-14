import * as types from './types';

const fetchAccountsAction = (payload) => ({
  type: types.FETCH_ACCOUNTS,
  payload
});

export default fetchAccountsAction;
