import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
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

export default CategoryPost

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