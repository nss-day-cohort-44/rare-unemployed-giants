import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const TagContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const TagProvider = (props) => {
    const [tags, setTags] = useState([])

    const getTags = () => {
        return fetch("http://localhost:8088/tags")
            .then(res => res.json())
            .then(setTags)
    }

    /*
        You return a context provider which has the
        `Tages` state, the `addTag` function,
        and the `getTag` function as keys. This
        allows any child elements to access them.
    */
    return (
        <TagContext.Provider value={{
            tags, getTags
        }}>
            {props.children}
        </TagContext.Provider>
    )
}