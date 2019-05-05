import * as types from '../../actions/tasksList/actionTypes';

const initialState = {
    tasks: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS_LIST_SUCCESS: {
            return {
                ...state,
                tasks: action.tasks === undefined ? [] : action.tasks,
                error: null
            }
        }
        case types.GET_TASKS_LIST_ERROR: {
            return {
                ...state,
                tasks: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}