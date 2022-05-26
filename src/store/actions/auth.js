import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,

    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from "./types"

const API_URL = process.env.REACT_APP_API_URL

export const signIn = (username, password) => async (dispatch) => {
    console.log("signIn is called")
    dispatch({
        type: SET_AUTH_LOADING,
    })
    const requestBody = JSON.stringify({
        username: username,
        password: password,
    })

    console.log(requestBody)

    try {
        const config = {
            mode: "cors",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        const res = await fetch(`${API_URL}/admin/`, config)

        const data = await res.json()

        if (res.status === 200) {
            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: data.token // set token string to payload
            })
        } else {
            dispatch({
                type: SIGN_IN_FAIL,
            })
        }
    } catch (err) {
        dispatch({
            type: SIGN_IN_FAIL,
        })
    }
    dispatch({
        type: REMOVE_AUTH_LOADING,
    })
}