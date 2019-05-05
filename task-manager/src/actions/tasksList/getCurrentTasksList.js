import {get} from '../../fetcher/tasksList/fetcher';

import * as types from './actionTypes';

export default function getCurrentTasksList(status) {
    return (dispatch) => {
        return get('api/tasks?status=' + status)
            .then(response => {
                dispatch({
                    type: types.GET_TASKS_LIST_SUCCESS,
                    tasks: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TASKS_LIST_ERROR,
                    error: error
                })
            })
    }
}