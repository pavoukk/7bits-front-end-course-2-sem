import * as types from './actionTypes';
export default function addNewTask(text) {
    return (dispatch) => {
                dispatch({
                    type: types.ADD_NEW_TASK,
                    text,
                    id: Math.random().toString()
                });
    }
}