import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getCategories } from "../store/actions/category";

export const Sidebar = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.category.categories)

    useEffect(() => {
        const fn = async () => {
            if (dispatch && dispatch !== null && dispatch !== undefined) {
                await dispatch(getCategories())
            }
        }
        fn()
    }, [dispatch])

    return (
        categories ? (
            <>
                {categories.map((category) => {
                    return (
                        <ul>
                            <li>
                                <a href={`/categories/${category.slug}/`}>{category.name}</a>
                            </li>
                        </ul>

                    )
                })}
            </>
        ) : (
            <h1>Loading</h1>
        )
    )
}