import axios from 'axios';

const currentUserApi = {
  signUp: async (payload) => axios.post('/users/register', payload),
  signIn: async (payload) => axios.post('/users/authenticate', payload),
};

export default currentUserApi;
