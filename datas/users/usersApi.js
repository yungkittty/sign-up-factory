import axios from 'axios';

const usersApi = {
  getUsers: async () => axios.get('/users/'),
  getUser: async (id) => axios.get(`/users/${id}`),
};

export default usersApi;
