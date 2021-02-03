import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TagContext } from "./TagProvider";

export const TagList = (props) => {
    const { tags, getTags, deleteTag } = useContext(TagContext)

    useEffect(() => {
        getTags()
    }, [])

    const handleDelete = (tag) => {
        let userChoice = window.confirm(`Are you sure you want to delete the ${tag.label} tag?`)

        if (userChoice) {
            deleteTag(tag.id)
            props.history.push(`/tags`)
        }
    }


    return (
        <article className="tags">
            <div style={{ margin: "0rem 3rem"}}>
                <h1>Tags</h1>
                
                <Link to={`/tags/form`}>
                    <button type="button"> Add New Tag </button>
                </Link>
                
                {
                    tags.map(tag => {
                        return(
                            <section key={tag.id} className="tag">
                                <h2>{tag.label}</h2>
                                <button onClick={() => {handleDelete(tag) }} >
                                    Delete Tag
                                </button>
                            </section>
                        )
                    }
                    )}
            </div>
        </article>
    )
}
