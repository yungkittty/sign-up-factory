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
      state.splice(index, 1, {...state[index], ...action.payload});
      return JSON.parse(JSON.stringify(state)); // This is a hacky way to keep state not mutated.
    }
    default: {
      return state;
    }
  }
};

export default usersReducers;
