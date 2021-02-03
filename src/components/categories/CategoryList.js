import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider";

//This is the function that renders the list of categories
export const CategoryList = (props) => {
    const { categories, getCategories, deleteCategory } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    //This function verifies the selected category for deletion with a window prompt given to the user.
    const verifyDelete = (category) => {
        let selectChoice = window.confirm(`Are you sure you want to delete the ${category.label} tag?`)    

        //If user confirms, delete the category with the id of the selected category
        if (selectChoice) {
            deleteCategory(category.id);
            props.history.push('/categories')
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
