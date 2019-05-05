import * as types from '../../actions/tasksList/actionTypes';

const initialState = {
    tasks: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {text: action.text, status: "inbox", id: action.id}],
                error: null
            }
        }
        case types.ADD_NEW_TASK_ERROR: {
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