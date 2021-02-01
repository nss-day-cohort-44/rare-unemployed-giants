import React, { useRef } from "react"
import "./Tag.css"

export const TagForm = (props) => {

    const tagLabel = useRef()

    // This function fires when the Save button is clicked
    const handleSubmit = () => {
        const newTag = {
            "label": tagLabel.current.value
        }

        return fetch("http://localhost:8088/tags/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTag)
        })
            .then(res => res.json())
    }

    /*
        1. Render a form for the client to create a new tag.
        2. When the save button is clicked, convert the client's
            text input to valid JSON and POST it to the database.
        3. Redirect the client to TagList component.
    */
    return (
        <article className="tags">
            <div style={{ margin: "0rem 3rem" }}>
                <h1>Please Enter a New Tag</h1>
            </div>

            <form className="form--createTag" onSubmit={handleSubmit}>

                <input ref={tagLabel} type="text" name="newTag" className="form-control"
                    placeholder="Tag name" required autoFocus />

                <button onClick={() => {
                    handleSubmit()
                    props.history.push('/tags')
                }}> Save </button>

            </form>
        </article>
    )
}
