import axios from 'axios';
import errorOccured  from '../actions/error';


const token = localStorage.getItem('token');
const timeout = 60000;
const baseURL = 'https://momobank.herokuapp.com/';
const headers = token
  ? {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  } : {
    'Content-Type': 'application/json',
  };

const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
});


const publicPostData = (path, actionCreator, method, data) => (dispatch) => {
  return axiosInstance[method](path, data)
    .then((response) => {
      dispatch(actionCreator(response.data));
      return {
        data: response.data
      };
    })
    .catch((error) => {
      dispatch(errorOccured(error));
      return {
        error: error.response.data
      };
    });
};

export const privatePostData = (path, actionCreator, method, data,) => (dispatch) => {
  return axiosInstance[method](path, data)
  .then((response) => {
    dispatch(actionCreator(response.data));
    return {
      data: response.data
    };
  }).catch((error) => {
    dispatch(errorOccured(error));
    return {
      error: error.response.data
    };
  });
};

export default publicPostData;

