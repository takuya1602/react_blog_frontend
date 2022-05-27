import {
    GET_SUB_CATEGORIES_SUCCESS,
    GET_SUB_CATEGORIES_FAIL,

    SET_SUB_CATEGORY_LOADING,
    REMOVE_SUB_CATEGORY_LOADING,
} from "../actions/types"

const initilaState = {
    loading: false,
    subCategories: null,
}

const subCategoryReducer = (state = initilaState, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_SUB_CATEGORIES_SUCCESS:
            return {
                ...state,
                subCategories: payload,
            }
        case GET_SUB_CATEGORIES_FAIL:
            return {
                ...state,
            }
        case SET_SUB_CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_SUB_CATEGORY_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default subCategoryReducer