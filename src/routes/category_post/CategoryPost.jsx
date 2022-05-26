import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getCategoryPosts } from "../../store/actions/post"
import styled from "styled-components"

export const CategoryPost = () => {
    const { slug } = useParams()
    console.log(slug)
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)

    useEffect(() => {
        const fn = async () => {
            if (dispatch && dispatch !== null && dispatch !== undefined) {
                await dispatch(getCategoryPosts(slug))
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

export default CategoryPost

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