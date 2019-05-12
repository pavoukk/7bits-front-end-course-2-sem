import * as types from '../../actions/user/actionTypes';

const initialState = {
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USER_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.AUTHORIZE_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}