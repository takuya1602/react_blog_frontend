import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { getPostDetail } from "../../store/actions/post"

const Post = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const postDetail = useSelector((state) => state.post.post_detail)

    useEffect(() => {
        const fn = async () => {
            if (dispatch && dispatch !== null && dispatch !== undefined) {
                await dispatch(getPostDetail(id))
            }
        }
        fn()
    }, [dispatch])


    return (
        postDetail ? (
            <>
                <h1>{postDetail.title}</h1>
                <img src={postDetail.eye_catching_img} alt={postDetail.title} />
                <p>{postDetail.content}</p>
            </>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default Post