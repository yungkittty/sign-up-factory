import {combineReducers} from 'redux';
import {currentUserReducers} from '../../datas/current-user';

const rootReducer = combineReducers({currentUser: currentUserReducers});

export default rootReducer;
