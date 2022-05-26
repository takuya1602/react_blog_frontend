import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../../store/actions/post";
import { Sidebar } from "../../components/Sidebar";
import styled from "styled-components"

const API_URL = process.env.REACT_APP_API_URL

const Home = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)

    useEffect(() => {
        const fn = async () => {
            if (dispatch && dispatch !== null && dispatch !== undefined) {
                await dispatch(getPosts())
            }
        }
        fn()
    }, [dispatch])

    return (
        posts ? (
            <Container>
                <MainContents>
                    {posts.map((post) => {
                        return (
                            <ul>
                                <li>
                                    <a href={`/posts/${post.slug}`}>{post.title}</a>
                                </li>
                            </ul>
                        )
                    })}
                </MainContents>
                <SubContents>
                    <Sidebar />
                </SubContents>
            </Container>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default Home

const Container = styled.div`
    display: flex;
    width: 100%;
`

const MainContents = styled.div`
    width: 75%;
        ul {
            list-style: none;
            li {
                a {
                    text-decoration: none;
                }
            }
        }
`

const SubContents = styled.div`
    width: 25%;
`