import {
    GET_SUB_CATEGORIES_SUCCESS,
    GET_SUB_CATEGORIES_FAIL,

    SET_SUB_CATEGORY_LOADING,
    REMOVE_SUB_CATEGORY_LOADING,
} from "./types"

const API_URL = process.env.REACT_APP_API_URL

export const getSubCategories = () => async (dispatch) => {
    dispatch({
        type: SET_SUB_CATEGORY_LOADING,
    })

    try {
        const res = await fetch(`${API_URL}/sub-categories/`, {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json()

        if (res.status === 200) {
            dispatch({
                type: GET_SUB_CATEGORIES_SUCCESS,
                payload: data,
            })
        } else {
            dispatch({
                type: GET_SUB_CATEGORIES_FAIL,
            })
        }
    } catch (err) {
        dispatch({
            type: GET_SUB_CATEGORIES_FAIL,
        })
    }

    dispatch({
        type: REMOVE_SUB_CATEGORY_LOADING,
    })
}