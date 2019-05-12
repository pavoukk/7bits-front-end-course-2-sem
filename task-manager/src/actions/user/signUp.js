import {post} from '../../fetcher/user/fetcher';

import * as types from './actionTypes';

export default function signUp(username, password) {
    return (dispatch) => {
        return post('api/signup', {
            username: username,
            password: password
        })
            .then((response) => {
                dispatch({
                    type: types.ADD_USER_SUCCESS
                });
            })
            .catch((error) => {
                dispatch({
                    type: types.ADD_USER_ERROR,
                    error: error
                });
            })
    }
}