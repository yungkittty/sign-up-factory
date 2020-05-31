import _ from 'lodash';
import usersActionsTypes from './usersActionsTypes';

const usersReducers = (state = [], action) => {
  switch (action.type) {
    case usersActionsTypes.GET_USERS /* _SUCCESS */: {
      return action.payload;
    }
    case usersActionsTypes.GET_USER /* _SUCCESS */: {
      const index = _.findIndex(state, {_id: action.payload.userId});
      if (index === -1) return state;
      const newUser = {...state[index], ...action.payload};
      return [...state.slice(0, index), newUser, ...state.slice(index + 1, state.length)];
    }
    default: {
      return state;
    }
  }
};

export default usersReducers;
