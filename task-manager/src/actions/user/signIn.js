import {post} from '../../fetcher/user/fetcher';

import * as types from './actionTypes';

export default function signIn(username, password) {
    return (dispatch) => {
        debugger;
        return post('api/signin', {
            username: username,
            password: password
        })
            .then((response) => {
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
