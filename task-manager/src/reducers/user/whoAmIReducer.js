import * as types from '../../actions/user/actionTypes';

const initialState = {
    authorized: !!localStorage.getItem('jwt'),
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.WHOAMI_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.AUTHENTICATE_ERROR: {
            return {
                ...state,
                authorized: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}