import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,

    SET_CATEGORY_LOADING,
    REMOVE_CATEGORY_LOADING,
} from "../actions/types"

const initilaState = {
    loading: false,
    categories: null,
}

const categoryReducer = (state = initilaState, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
            }
        case GET_CATEGORIES_FAIL:
            return {
                ...state,
            }
        case SET_CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_CATEGORY_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default categoryReducer