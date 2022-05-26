import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,

    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from "../actions/types"

const initialState = {
    loading: false,
    token: null,
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                token: payload,
            }
        case SIGN_IN_FAIL:
            return {
                ...state,
            }
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default authReducer