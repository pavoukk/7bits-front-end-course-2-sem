import { get } from '../../fetcher/user/fetcher';

import * as types from './actionTypes';

export default function whoAmI() {
    return (dispatch) => {
        return get('api/whoami')
            .then(() => {
                dispatch({
                    type: types.WHOAMI_SUCCESS
                });
            })
            .catch((error) => {
                localStorage.removeItem('jwt');
                dispatch({
                    type: types.AUTHENTICATE_ERROR,
                    error: error
                });
            })
    }

}