import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getCategories } from "../store/actions/category";
import styled from "styled-components"

export const Sidebar = () => {
    console.log("Siderbar: rendering")
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
            <Container>
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={category.id}>
                                <a href={`/categories/${category.slug}/`}>{category.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        ) : (
            <></>
        )
    )
}

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