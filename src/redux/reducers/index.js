import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import transactionsReducer from './transactionsReducer';

const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
  transactionsReducer,
});

export default rootReducer;

