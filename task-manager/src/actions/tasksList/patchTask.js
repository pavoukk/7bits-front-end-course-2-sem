import * as types from './actionTypes';
import {patch} from "../../fetcher/fetcher";
export default function patchTask(data, id) {
    return (dispatch) => {
        return patch(`api/tasks/${id}`, data)
            .then(response => {
                dispatch({
                    type: types.PATCH_TASK_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.PATCH_TASK_ERROR,
                    error: error
                })
            })

    }
}