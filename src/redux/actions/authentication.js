import * as types from './types';

const loginAction = (payload) => ({
  type: types.LOGIN_USER,
  payload
});

export default loginAction;

