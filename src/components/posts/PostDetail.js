import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "./PostProvider";

export const PostDetail = (props) => {

    const {
        getPostById,
        deletePost
    } = useContext(PostContext);

    const [post, setPost] = useState({});

    // Defines current user, used for user-specific data
    const currentUser = +(localStorage.getItem("rare_user_id"))

    // Find the post whose id matches the id in the URL bar, and then set that post to state
    useEffect(() => {
        getPostById(props.match.params.postId).then((post) => setPost(post))
    }, [])

    // This function fires when the Save button is clicked
    const confirmDelete = () => {

        // Confirm deletion
        let userConfirmed = window.confirm("You are about to delete your post!\nIf you are sure you want to continue, click \"Ok\".");

        if (userConfirmed) {
            // After confirmation, delete from database and redirect to PostList view
            deletePost(post.id)
            props.history.push('/')
        }
        else {
            // Pass
        }
    }

    const seeComments = () => {
        props.history.push(`/comments/${props.match.params.postId}`)
    }

    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Post Details</h1>

            {/* 
                Ternary operator (fancy if statement).

                If the userId of the logged in user matches
                the postId (meaning that the logged in user
                created the post), render details WITH the
                "Delete Post" button.
            */}
            {currentUser === post.userId ? (
                <>
                    <p>Title: {post.title}</p>
                    <p>Image URL: {post.imageUrl}</p>
                    <p>Content: {post.content}</p>
                    <p>Publication Date: {post.publicationDate}</p>
                    <p>Author: {post.author}</p>

            <button onClick={seeComments}> View Comments </button>

            <button onClick={() => {
                props.history.push(`/commentForm/${props.match.params.postId}`)
            }}> Make Comment </button>
                    <button onClick={() => {
                        confirmDelete()
                    }}> Delete Post </button>
                </>
            ) :
                /* 
                    Otherwise render everything BESIDES the "Delete Post"
                    button (logged in user did not create the post, thus
                    they should not be able to delete it.
                */
                (
                    <>
                        <p>Title: {post.title}</p>
                        <p>Image URL: {post.imageUrl}</p>
                        <p>Content: {post.content}</p>
                        <p>Publication Date: {post.publicationDate}</p>
                        <p>Author: {post.author}</p>
                    </>
                )
            }
        </div>
    )
}