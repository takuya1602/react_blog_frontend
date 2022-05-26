import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../../store/actions/auth"
import styled from "styled-components"

export const SignIn = () => {
    const dispatch = useDispatch()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(signIn(username, password))
    }

    return (
        <Overlay>
            <Content>
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
            </Content>
        </Overlay>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    z-index: 2;
    width: 50%;
    padding: 1em;
    background: #fff;
`