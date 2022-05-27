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
                <p>カテゴリ一覧</p>
                <CategoryList>
                    <ul>
                        {categories.map((category) => {
                            return (
                                <li key={category.id}>
                                    <a href={`/categories/${category.slug}/`}>{category.name}</a>
                                    <ul>
                                        { }
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </CategoryList>
            </Container>
        ) : (
            <></>
        )
    )
}

const Container = styled.div`
    p {
        width: 100px;
        font-weight: bold;
        margin: 54px auto 10px auto;
        text-align: center;
    }
`

const CategoryList = styled.div`
    background-color: #f1f1f1;
    border-radius: 15px;
    ul {
        margin: 0;
        padding: 10px 20px;
        list-style: none;
        li {
            a {
                text-decoration: none;
                color: black;
            }
        }
    }
`