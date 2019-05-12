import { combineReducers } from 'redux';

import currentTasksListReducer from './tasks/currentTasksListReducer'
import addNewTaskReducer from './tasks/addNewTaskReducer'
import deleteTaskReducer from './tasks/deleteTaskReducer'
import patchTaskReducer from './tasks/patchTaskReducer'

import authorizeReducer from './user/authorizeReducer';
import whoAmIReducer from './user/whoAmIReducer';
import addUserReducer from './user/addUserReducer';
export default (state = {}, action) => {
    return combineReducers({
        currentTasksListReducer,
        addNewTaskReducer,
        deleteTaskReducer,
        patchTaskReducer,
        authorizeReducer,
        whoAmIReducer,
        addUserReducer
    })(state, action);
}