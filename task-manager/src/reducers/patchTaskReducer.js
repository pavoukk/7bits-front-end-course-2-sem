import * as types from '../actions/tasksList/actionTypes';

const initialState = {
    tasks: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.PATCH_TASK_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.PATCH_TASK_ERROR: {
            return{
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