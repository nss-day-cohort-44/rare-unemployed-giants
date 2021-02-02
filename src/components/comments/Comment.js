import React, { useContext } from 'react'
import { CommentContext } from './CommentProvider'

export const Comment = props => {
    const { deleteComment } = useContext(CommentContext)

    return (
    <div className="comments">
        <p className="subject"></p>
        <p className="content">{props.body}</p>
        <p className="content">{props.author}</p>
        <p className="timeStamp">{props.time}</p>
        {props.authorId === localStorage.getItem("rare_user_id") ? <button onClick={() => {
            deleteComment(props.authorId)
        }}></button> : ""}
    </div>
    )}