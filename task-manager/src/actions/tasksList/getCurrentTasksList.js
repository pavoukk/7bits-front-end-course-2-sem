import {get} from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getCurrentTasksList(status) {
    return (dispatch) => {
        return get('api/tasks?status=' + status)
        // return get('mockapi/getCurrentTasksList.json')
            .then(response => {
                // console.log('dertghjgfkd' + response.data);
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