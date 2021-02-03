import React, { useContext, useEffect, useState, useRef } from "react"
import { CommentContext } from "./CommentProvider"
import { Comment } from "./Comment"
import { UserContext } from "../users/UserProvider"
import { HumanDate } from "../utils/HumanDate"

export const CommentList = props => {
    const { comments, getComments } = useContext(CommentContext)
    const { users, getUsers } = useContext(UserContext)

    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        getUsers().then(getComments).then(() => {
            setPostComments(comments.filter(com => com.post_id === parseInt(props.match.params.comments)))


        })
    }, [])

    useEffect(() => {
            //Resets the state of postComments whenever comments changes, triggering a rerender
            setPostComments(comments.filter(com => com.post_id === parseInt(props.match.params.comments)))
    }, [comments])

    return (
        <div className="commentContainer">
            <div className="comments">
                {postComments.map(comment => {
                    //Defines author variable by matching the comment's author_id to the user's id and sets that user as the author
                    const author = users.find(user => user.id === comment.author_id)
                    return (<Comment key={comment.id} id={comment.id} author={author.username} authorId={author.id} body={comment.content} time={HumanDate(comment.time)}></Comment>)
                })
                }
            </div>
        </div>
    )
}