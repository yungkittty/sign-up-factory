const usersApi = {
  getUsers: async () =>
    // eslint-disable-next-line
    fetch(`${process.env.API_URL}/users/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }),
};

export default usersApi;
