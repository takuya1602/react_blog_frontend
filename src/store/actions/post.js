import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,

    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAIL,

    SET_POST_LOADING,
    REMOVE_POST_LOADING,
} from "./types"

const API_URL = process.env.REACT_APP_API_URL

export const getPosts = () => async (dispatch) => {
    dispatch({
        type: SET_POST_LOADING,
    })

    try {
        const res = await fetch(`${API_URL}/posts/`, {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        const data = await res.json()

        if (res.status === 200) {
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: data,
            })
        } else {
            dispatch({
                type: GET_POSTS_FAIL,
            })
        }
    } catch (err) {
        dispatch({
            type: GET_POSTS_FAIL,
        })
    }

    dispatch({
        type: REMOVE_POST_LOADING,
    })
}

export const getPostDetail = (slug) => async (dispatch) => {
    dispatch({
        type: SET_POST_LOADING,
    })

    try {
        const res = await fetch(`${API_URL}/posts/${slug}`, {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        const data = await res.json()

        if (res.status === 200) {
            dispatch({
                type: GET_POST_DETAIL_SUCCESS,
                payload: data,
            })
        } else {
            dispatch({
                type: GET_POST_DETAIL_FAIL,
            })
        }
    } catch (err) {
        dispatch({
            type: GET_POST_DETAIL_FAIL,
        })
    }

    dispatch({
        type: REMOVE_POST_LOADING,
    })
}