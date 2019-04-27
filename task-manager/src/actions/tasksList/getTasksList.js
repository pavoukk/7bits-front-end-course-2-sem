import {get} from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getTasksList() {
    return (dispatch) => {
        return get('mockapi/getTasksList.json')
            .then(response => {
                dispatch({
                    type: types.GET_TASKS_LIST_SUCCESS,
                    tasksList: response.data
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