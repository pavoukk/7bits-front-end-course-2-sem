import {post} from '../../fetcher/user/fetcher';

import * as types from './actionTypes';

export default function signIn(username, password) {
    return (dispatch) => {
        return post('api/signin', {
            username: username,
            password: password
        })
            .then((response) => {
                if (!response.token) {
                    dispatch({
                        type: types.AUTHORIZE_ERROR,
                        error: 'undefined token'
                    });
                    return;
                }
                localStorage.setItem('jwt', response.token);
                dispatch({
                    type: types.AUTHORIZE_SUCCESS
                });
            })
            .catch((error) => {
                dispatch({
                    type: types.AUTHORIZE_ERROR,
                    error: error
                });
            })
    }
}
