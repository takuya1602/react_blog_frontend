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
    padding: 0;
    margin: 0;
    text-align: center;

    h1 {
        margin: 0;
        background-color: #3F4234;
        padding: 5px 0;
        a {
            text-decoration: none;
            font-family: 'Comic Sans MS';
            color: #D1A827;
            font-size: 1.6rem;

        }
    }
`