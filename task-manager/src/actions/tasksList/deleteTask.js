import {remove} from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function deleteTask(id) {
    return (dispatch) => {
        // debugger;
        return remove(`api/tasks/${id}`)
            .then(response => {
                dispatch({
                    type: types.DELETE_TASK_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.DELETE_TASK_ERROR,
                    error: error
                })
            })
    }
}