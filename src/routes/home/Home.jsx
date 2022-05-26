import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../../store/actions/post";
import styled from "styled-components"

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
                <ul>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <a href={`/posts/${post.slug}`}>{post.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default Home

const Container = styled.div`
    ul {
        list-style: none;
        li {
            a {
                text-decoration: none;
            }
        }
    }
`