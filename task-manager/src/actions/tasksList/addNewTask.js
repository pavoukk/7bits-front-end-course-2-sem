import * as types from './actionTypes';
import {add} from "../../fetcher/tasksList/fetcher";
export default function addNewTask(text) {
    return (dispatch) => {
        return add('api/tasks', text)
            .then(response => {
                dispatch({
                    type: types.ADD_NEW_TASK
                });
            })
            .catch(error => {
                dispatch({
                    type: types.ADD_NEW_TASK_ERROR,
                    error: error
                })
            })

    }
}