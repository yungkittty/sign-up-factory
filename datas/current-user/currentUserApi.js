const currentUserApi = {
  signUp: async (payload) =>
    // eslint-disable-next-line
    fetch(`${process.env.API_URL}/users/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }),
  signIn: async (payload) =>
    // eslint-disable-next-line
    fetch(`${process.env.API_URL}/users/authenticate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }),
};

export default currentUserApi;
