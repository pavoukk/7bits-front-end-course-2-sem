import * as types from '../../actions/user/actionTypes';

const initialState = {
    authorized: !!localStorage.getItem('jwt'),
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHORIZE_SUCCESS: {
            console.log(localStorage.getItem('jwt'));
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
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}