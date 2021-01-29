import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider";
import "./Category.css"

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <article className="categories">
            <div style={{ margin: "0rem 3rem" }}>
                <h1>Categories</h1>

                <Link to={`/categories/form`}>
                    <button type="button"> Create Category </button>
                </Link>

                {
                    categories.map(category => {
                        return (
                            <section key={category.id} className="category">
                                <h2>{category.label}</h2>
                            </section>
                        )
                    }
                    )}
            </div>

        </article>
    )
}
