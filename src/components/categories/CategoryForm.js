/*
AUTHOR: Travis Stevenson
PURPOSE: This module is responsible for presenting the client with a form so
that they can add a new category to the database via DOM interaction.
*/

import React, { useRef } from "react"

export const CategoryForm = (props) => {

    const categoryLabel = useRef()

    // This function fires when the Save button is clicked
    const handleSubmit = () => {
        const newCategory = {
            "label": categoryLabel.current.value
        }

        return fetch("http://localhost:8088/categories/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => res.json())
    }

    /*
        1. Render a form for the client to create a new category.
        2. When the save button is clicked, convert the client's
            text input to valid JSON and POST it to the database.
        3. Redirect the client to CategoryList component.
    */
    return (
        <article className="categories">
            <div style={{ margin: "0rem 3rem" }}>
                <h1>Create a new category</h1>
            </div>

            <form className="form--createCategory" onSubmit={handleSubmit}>

                <input ref={categoryLabel} type="text" name="newCategory" className="form-control"
                    placeholder="Category name" required autoFocus />

                <button onClick={() => {
                    handleSubmit()
                    props.history.push('/categories')
                }}> Save </button>

            </form>
        </article>
    )
}
