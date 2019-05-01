import { combineReducers } from 'redux';

import currentTasksListReducer from './currentTasksListReducer'
import completedTasksListReducer from './completedTasksListReducer'
import addNewTaskReducer from './addNewTaskReducer'
export default (state = {}, action) => {
    return combineReducers({
        currentTasksListReducer,
        completedTasksListReducer,
        addNewTaskReducer
    })(state, action);
}