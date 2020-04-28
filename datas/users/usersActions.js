import usersActionsTypes from './usersActionsTypes';

const usersActions = {
  getUsers /* Request */: (payload) => ({
    type: usersActionsTypes.GET_USERS /* _REQUEST */,
    payload,
  }),
  /* getUsersSuccess: (payload) => ({
    type: usersActionsTypes.GET_SUCCESS,
    payload,
  }),
  getUsersFailure: (error) => ({
    type: usersActionsTypes.GET_FAILURE,
    payload: undefined,
    error,
  }), */
};

export default usersActions;
