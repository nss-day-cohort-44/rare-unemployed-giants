import React, { useContext, useEffect, useState, useRef } from "react"
import { CommentContext } from "./CommentProvider"
import { Comment } from "./Comment"
import { UserContext } from "../users/UserProvider"
import { HumanDate } from "../utils/HumanDate"

export const CommentList = props => {
    const { comments, getComments } = useContext(CommentContext)
    const { users, getUsers } = useContext(UserContext)

    const [postComments, setPostComments] = useState([])
    let author = {}

    useEffect(() => {
        getComments().then(getUsers).then(() => {
            setPostComments(comments.filter(com => com.post_id === parseInt(props.match.params.comments)))


        })
    }, [])

    return (
        <div className="commentContainer">
            <div className="comments">
                {postComments.map(comment => {
                    const author = users.find(user => user.id === comment.author_id)
                    return (<Comment key={comment.id} id={comment.id} author={author.username} body={comment.content} time={HumanDate(comment.time)}></Comment>)
                })
                }
            </div>
        </div>
    )
}