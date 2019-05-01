import {get} from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getCurrentTasksList() {
    return (dispatch) => {
        return get('mockapi/getCurrentTasksList.json')
            .then(response => {
                dispatch({
                    type: types.GET_CURRENT_TASKS_LIST_SUCCESS,
                    tasksList: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_CURRENT_TASKS_LIST_ERROR,
                    error: error
                })
            })
    }
}