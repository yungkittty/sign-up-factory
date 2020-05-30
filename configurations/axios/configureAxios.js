import axios from 'axios';

const configureAxios = () => {
  axios.defaults.baseURL = process.env.API_URL;
  axios.defaults.withCredentials = true;
};

export default configureAxios;
