import React, { useContext, useEffect, useState, useRef } from "react"
import { CommentContext } from "./CommentProvider"
import { Comment } from "./Comment"
import { UserContext } from "../users/UserProvider"
import { HumanDate } from "../utils/HumanDate"

export const CommentList = props => {
    const { comments, getComments } = useContext(CommentContext)
    const { users, getUsers } = useContext(UserContext)

    const [ postComments, setPostComments ] = useState([])

    useEffect(() => { getComments().then(getUsers)}, [])

    useEffect(() => { 
        setPostComments(comments.filter(com => com.post_id === props.match.params.posts))

    }, [comments])




    return (
        <div className="commentContainer">
            <div className="comments">
            {postComments.map(comment => {
                            return (<Comment key={comment.id} id={comment.id} author={users.filter(user => user.id === comment.authorId)} body={comment.content} time={HumanDate(comment.time)}></Comment>)
                        })
                        }
            </div>
        </div>
    )
}