import axios from 'axios';

const currentUserApi = {
  signUp: async (payload) => axios.post('/users/register', payload),
  signIn: async (payload) => axios.post('/users/authenticate', payload),
  logout: async () => axios.post('/users/logout'),
  patch: async ({userId, ...others}) => axios.put(`/users/${userId}`, others),
  uploadAvatar: async ({avatarData}) => {
    const data = new FormData(); // eslint-disable-line
    data.append('avatar', avatarData.file);
    return axios.post('/users/avatar', data);
  },
};

export default currentUserApi;
