import currentUserActionsTypes from './currentUserActionsTypes';

const currentUserActions = {
  signIn /* Request */: (payload) => ({
    type: currentUserActionsTypes.SIGN_IN /* _REQUEST */,
    payload,
  }),
  /* signInSuccess: (payload) => ({
    type: currentUserActionsTypes.SIGN_IN_SUCCESS,
    payload,
  }),
  signInFailure: (error) => ({
    type: currentUserActionsTypes.SIGN_IN_FAILURE,
    payload: undefined,
    error,
  }), */
  signOut /* Request */: (payload) => ({
    type: currentUserActionsTypes.SIGN_OUT /* _REQUEST */,
    payload,
  }),
  /* signOutSuccess: (payload) => ({
    type: currentUserActionsTypes.SIGN_OUT_SUCCESS,
    payload,
  }),
  signOutFailure: (error) => ({
    type: currentUserActionsTypes.SIGN_OUT_FAILURE,
    payload: undefined,
    error,
  }), */
};

export default currentUserActions;
