import React, { useContext } from 'react'
import {CommentContext} from "./CommentProvider"

export const Comment = props => {
    const { deleteComment } = useContext(CommentContext)

    const confirmDelete = () => {

        // Confirm deletion
        let userConfirmed = window.confirm("You are about to delete your comment!\nIf you are sure you want to continue, click \"Ok\".");

        if (userConfirmed) {
            // After confirmation, delete from database and redirect to CommentList view
            console.log(props.id)
            deleteComment(props.id)
        }
    }
    return (<div className="comments">
        <p className="subject"></p>
        <p className="content">{props.body}</p>
        <p className="content">{props.author}</p>
        <p className="timeStamp">{props.time}</p>
        {/* If authorId is equal to the parseInt'd current user from local storage, display the delete button */}
        {props.authorId === +(localStorage.getItem("rare_user_id")) ? <button onClick={confirmDelete}> Delete Comment </button> : ""}
    </div>
)

            }