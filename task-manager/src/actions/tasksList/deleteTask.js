import {remove} from '../../fetcher/tasksList/fetcher';

import * as types from './actionTypes';

export default function deleteTask(id) {
    return (dispatch) => {
        return remove(`api/tasks/${id}`)
            .then(() => {
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