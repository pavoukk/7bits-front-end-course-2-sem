import { combineReducers } from 'redux';

import currentTasksListReducer from './currentTasksListReducer'
import addNewTaskReducer from './addNewTaskReducer'
import deleteTaskReducer from './deleteTaskReducer'
import patchTaskReducer from './patchTaskReducer'
export default (state = {}, action) => {
    return combineReducers({
        currentTasksListReducer,
        addNewTaskReducer,
        deleteTaskReducer,
        patchTaskReducer
    })(state, action);
}