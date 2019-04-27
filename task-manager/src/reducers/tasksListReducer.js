import * as types from '../actions/tasksList/actionTypes';

const initialState = {
    tasksList: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS_LIST_SUCCESS: {
            return {
                ...state,
                tasksList: action.tasksList,
                error: null
            }
        }
        case types.GET_TASKS_LIST_ERROR: {
            return {
                ...state,
                tasksList: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}