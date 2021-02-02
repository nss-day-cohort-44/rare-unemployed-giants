import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CommentContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
            .then(res => res.json())
            .then(setCategories)
    }

    const createComment = (post) => {
        return fetch("http://localhost:8088/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }).then(getComments);
      };

    const deleteComment = (id) => {
        return fetch(`http://localhost:8088/comments/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(getComments)
      };

    /*
        You return a context provider which has the
        `categories` state, the `addCategory` function,
        and the `getCategory` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CommentContext.Provider value={{
            comments, getComments
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}