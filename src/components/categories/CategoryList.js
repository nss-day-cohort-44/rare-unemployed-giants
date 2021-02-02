import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider";
import "./Category.css"

export const CategoryList = (props) => {
    const { categories, getCategories, deleteCategory } = useContext(CategoryContext)
    const { history } = useHistory();

    useEffect(() => {
        getCategories()
    }, [])

    const verifyDelete = (category) => {
        let selectChoice = window.confirm(`Are you sure you want to delete the ${category.label}?`)    

        if (selectChoice) {
            deleteCategory(category.id);
            props.history.push('/')
        }
        else {
             // Pass
        }
    }

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
                                <button onClick={(e) => { verifyDelete(category) }} >
                                    Delete Category
                                </button>
                            </section>
                        )
                    }
                    )}
            </div>

        </article>
    )
}
