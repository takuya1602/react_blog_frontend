import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,

    SET_CATEGORY_LOADING,
    REMOVE_CATEGORY_LOADING,
} from "./types"

const API_URL = process.env.REACT_APP_API_URL

export const getCategories = () => async (dispatch) => {
    dispatch({
        type: SET_CATEGORY_LOADING,
    })

    try {
        const res = await fetch(`${API_URL}/categories/`, {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json()

        if (res.status === 200) {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: data,
            })
        } else {
            dispatch({
                type: GET_CATEGORIES_FAIL,
            })
        }
    } catch (err) {
        dispatch({
            type: GET_CATEGORIES_FAIL,
        })
    }

    dispatch({
        type: REMOVE_CATEGORY_LOADING,
    })
}