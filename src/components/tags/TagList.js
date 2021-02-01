import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TagContext } from "./TagProvider";
import "./Tag.css"

export const TagList = (props) => {
    const { tags, getTags, deleteTag } = useContext(TagContext)

    useEffect(() => {
        getTags()
    }, [])

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
                                <button onClick={() => deleteTag(tag.id).then(() => props.history.push("/"))} >
                                    BEGONE TAG
                                </button>
                            </section>
                        )
                    }
                    )}
            </div>
        </article>
    )
}
