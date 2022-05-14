import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,

    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAIL,

    SET_POST_LOADING,
    REMOVE_POST_LOADING,
} from "../actions/types"

const initialState = {
    loading: false,
    posts: null,
    post_detail: null,
}

const postReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: payload
            }
        case GET_POSTS_FAIL:
            return {
                ...state,
            }
        case GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                post_detail: payload,
            }
        case GET_POST_DETAIL_FAIL:
            return {
                ...state,
            }
        case SET_POST_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_POST_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default postReducer