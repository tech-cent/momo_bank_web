import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import transactionsReducer from './transactionsReducer';
import fetchAccountsReducer from './accountsReducer';

const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
  transactionsReducer,
  fetchAccountsReducer
});

export default rootReducer;

