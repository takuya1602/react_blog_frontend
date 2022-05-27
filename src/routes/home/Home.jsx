import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../../store/actions/post";
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
                <h1>新着記事</h1>
                <PostList>
                    {posts.map((post) => {
                        return (
                            <PostCard>
                                <a href={`/posts/${post.slug}`}>
                                    <img src={`${API_URL}/media/${post.eye_catching_img}`} alt={`${post.title}`} />
                                    <p>{post.title}</p>
                                </a>
                            </PostCard>
                        )
                    })}
                </PostList>
            </Container>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default Home

const Container = styled.div`
    text-align: center;
`

const PostList = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1fr;
`
const PostCard = styled.div`
    height: 290px;
    width: 380px;
    background-color: #f1f1f1;
    border-radius: 15px;
    text-align: center;

    a {
        width: 100%;
        height: 100%;
        display: block;
        text-decoration: none;

        img {
            width: 85%;
            margin-top: 20px;
            height: auto;
            object-fit: contain;
            border-radius: 15px;
        }

        p {
            margin-top: 5px;
            color: black;
            font-weight: bold;
        }
    }
`