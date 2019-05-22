import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

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
        addUserReducer,
        i18n: i18nReducer
    })(state, action);
}