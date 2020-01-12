import axios from 'axios';
import errorOccured  from '../actions/error';

const axiosInstance = axios.create({
  baseURL: 'https://momobank.herokuapp.com/'
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

export default publicPostData;

