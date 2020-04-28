import {combineReducers} from 'redux';
import {currentUserReducers} from '../../datas/current-user';
import {usersReducers} from '../../datas/users';

const rootReducer = combineReducers({currentUser: currentUserReducers, users: usersReducers});

export default rootReducer;
