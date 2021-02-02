import React from 'react'
import { useContext, useState } from "react";
import { CommentContext } from "./CommentProvider";


export const CommentForm = props => {

    const { createComment } = useContext(CommentContext)
    const [ comment, setComment ] = useState({})

    const createNewComment = () => {
        const author = parseInt(localStorage.getItem("rare_user_id"))
        createComment({
            post_id: parseInt(props.match.params.comments),
            author_id: author,
            content: comment.content
        }).then(() => props.history.push(`/posts/${props.match.params.comments}`));
    };

    const handleControlledInputChange = (event) => {
        /*
                When changing a state object or array, always create a new one
                and change state instead of modifying current one
            */
        const newComment = Object.assign({}, comment); // Create copy
        newComment[event.target.name] = event.target.value; // Modify copy
        setComment(newComment); // Set copy as new state
      };

    return (
        <form className="commentForm">
            <h2 className="postForm__title">New Comment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Content: </label>
                    <input
                        type="text"
                        name="content"
                        required
                        className="form-control"
                        placeholder="Content"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();
                    createNewComment();
                }}
                className="btn btn-primary"
            >
                {" "}
            Submit
          </button>
        </form>
    );
};