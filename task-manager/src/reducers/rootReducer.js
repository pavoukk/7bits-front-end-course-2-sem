import { combineReducers } from 'redux';

import tasksListReducer from './tasksListReducer'
export default (state = {}, action) => {
    return combineReducers({
        tasksListReducer
    })(state, action);
}