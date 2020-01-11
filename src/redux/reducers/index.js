import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  loginReducer,
  signUpReducer
});

export default rootReducer;

