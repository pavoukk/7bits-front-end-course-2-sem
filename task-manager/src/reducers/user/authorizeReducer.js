import * as types from '../../actions/user/actionTypes';

const initialState = {
    authorized: !!localStorage.getItem('jwt'),
    error: null,
    valid: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHORIZE_SUCCESS: {
            return {
                ...state,
                authorized: true,
                error: null
            }
        }
        case types.AUTHORIZE_ERROR: {
            return {
                ...state,
                authorized: false,
                valid: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}