import * as types from '../actions/tasksList/actionTypes';

const initialState = {
    tasksList: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_TASK: {
            return {
                ...state,
                tasksList: [...state.tasksList, {text: action.text, status: "inbox", id: action.id}],
                error: null
            }
        }
        default: {
            return state;
        }
    }
}