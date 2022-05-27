import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import styled from "styled-components"

export const DefaulLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <MainContents>
                    <Outlet />
                </MainContents>
                <SubContents>
                    <Sidebar />
                </SubContents>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    margin: 0 30px 0px 30px;
`

const MainContents = styled.div`
    width: 75%;
`

const SubContents = styled.div`
    width: 25%;
`