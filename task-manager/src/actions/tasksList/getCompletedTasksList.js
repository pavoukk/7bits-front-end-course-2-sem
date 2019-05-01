import {get} from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getCompletedTasksList() {
    return (dispatch) => {
        return get('mockapi/getCompletedTasksList.json')
            .then(response => {
                dispatch({
                    type: types.GET_COMPLETED_TASKS_LIST_SUCCESS,
                    tasksList: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_COMPLETED_TASKS_LIST_ERROR,
                    error: error
                })
            })
    }
}