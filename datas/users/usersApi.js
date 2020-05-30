import axios from 'axios';

const usersApi = {
  getUsers: async () => axios.get('/users/'),
};

export default usersApi;
