import usersActionsTypes from './usersActionsTypes';

const usersReducers = (state = [], action) => {
  switch (action.type) {
    case usersActionsTypes.GET_USERS /* _SUCCESS */: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default usersReducers;
