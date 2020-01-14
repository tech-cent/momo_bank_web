import axios from 'axios';
import errorOccured  from '../actions/error';


const axiosInstance = axios.create({
  baseURL: 'https://momobank.herokuapp.com/',
  timeout: 60000
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

const privatePostData = (path, actionCreator, method, data,) => (dispatch) => {
  const token = localStorage.getItem('token');

  axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
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

const privateDataFetch = (endpoint, actionCreator) => (dispatch) => {
  const token = localStorage.getItem('token');

  axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
  return axiosInstance.get(endpoint).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((err) => {
    dispatch(errorOccured(err));
  });
};

export {
  publicPostData,
  privatePostData,
  privateDataFetch
};

