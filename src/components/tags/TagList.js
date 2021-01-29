import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider";
import "./Tag.css"

export const TagList = () => {
    const { tags, getTags } = useContext(TagContext)

    useEffect(() => {
        getTags()
    }, [])

    return (
        <article className="tags">
            <div style={{ margin: "0rem 3rem"}}>
                <h1>Tags</h1>
                {
                    tags.map(tag => {
                        return(
                            <section key={tag.id} className="tag">
                                <h2>{tag.label}</h2>
                            </section>
                        )
                    }
                    )}
            </div>
        </article>
    )
}
