import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from '../actions/types';

const initialSate = {
  signUpSuccess: {},
  signUpError: false,
};

const signUpReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
