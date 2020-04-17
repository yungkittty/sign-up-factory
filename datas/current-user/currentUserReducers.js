import {combineReducers} from 'redux';
import currentUserActionsTypes from './currentUserActionsTypes';

const id = (state = '', action) => {
  switch (action.type) {
    case currentUserActionsTypes.SIGN_IN /* _SUCCESS */: {
      return action.payload.id;
    }
    case currentUserActionsTypes.SIGN_OUT /* _SUCCESS */: {
      return '';
    }
    default: {
      return state;
    }
  }
};

const currentUserReducers = combineReducers({id});

export default currentUserReducers;
