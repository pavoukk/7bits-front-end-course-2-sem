import * as types from '../../actions/tasksList/actionTypes';

const initialState = {
    tasks: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_TASK_SUCCESS: {
            return {
                ...state,
                tasks: [...state.tasks.filter(el => el.id !== action.id)],
                error: null
            }
        }
        case types.DELETE_TASK_ERROR: {
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