import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../../store/actions/auth"

export const SignIn = () => {
    const dispatch = useDispatch()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(signIn(username, password))
    }

    return (
        <>
            <form onSubmit={handleSignIn}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </>
    )
}