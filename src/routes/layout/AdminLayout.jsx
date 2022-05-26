import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { SignIn } from "../admin/SignIn"

export const AdminLayout = () => {
    const token = useSelector((state) => state.auth.token)

    if (!token) {
        return (
            <SignIn />
        )
    }

    return (
        <Container>
            <h1>Admin Page</h1>
            <Outlet />
        </Container>
    )
}

const Container = styled.div`

`