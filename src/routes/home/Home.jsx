import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../../store/actions/post";

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
            <>
                {posts.map((post) => {
                    return (
                        <ul>
                            <li>
                                <a href={`/posts/${post.slug}`}>{post.title}</a>
                            </li>
                        </ul>
                    )
                })}
            </>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default Home