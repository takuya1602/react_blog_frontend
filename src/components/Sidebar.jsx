import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getCategories } from "../store/actions/category";
import { getSubCategories } from "../store/actions/subCategory";
import styled from "styled-components"

export const Sidebar = () => {
    console.log("Siderbar: rendering")
    const dispatch1 = useDispatch()
    const dispatch2 = useDispatch()
    const [categories, subCategories] = useSelector((state) => [
        state.category.categories,
        state.subCategory.subCategories,
    ])

    useEffect(() => {
        const fn = async () => {
            if (dispatch1 && dispatch1 !== null && dispatch1 !== undefined) {
                await dispatch1(getCategories())
            }
        }
        fn()
    }, [dispatch1])

    useEffect(() => {
        const fn = async () => {
            if (dispatch2 && dispatch2 !== null && dispatch2 !== undefined) {
                await dispatch2(getSubCategories())
            }
        }
        fn()
    }, [dispatch2])

    console.log(subCategories)

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
                                        {subCategories.map((subCategory) => {
                                            if (subCategory.parent_category_id === category.id) {
                                                return (
                                                    <a href={`/sub-categories/${subCategory.slug}`}>{subCategory.name}</a>
                                                )
                                            }
                                        })}
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