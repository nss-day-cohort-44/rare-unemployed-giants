import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider";
import "./Category.css"

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>Categories</h1>
            <article className="categories">
                        return <section key={category.id} className="card category">
                            <h2>{Category.name}</h2>
                        </section>
            </article>
        </div>
    )
}
