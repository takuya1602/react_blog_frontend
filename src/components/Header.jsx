import styled from "styled-components"

export const Header = () => {
    console.log("Header rendering")
    return (
        <Container>
            <h1>
                <a href="/">React-Golang Blog</a>
            </h1>
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    text-align: center;

    h1 {
        a {
            text-decoration: none;
            color: black;
        }
    }
`