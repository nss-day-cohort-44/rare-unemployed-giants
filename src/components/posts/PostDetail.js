import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "./PostProvider";

export const PostDetail = (props) => {

    const {
        getPostById,
        deletePost
    } = useContext(PostContext);

    const [post, setPost] = useState({});

    // Find the post whose id matches the id in the URL bar, and then set that post to state.
    useEffect(() => {
        getPostById(props.match.params.postId).then((post) => setPost(post))
    }, [])

    // This function fires when the Save button is clicked
    const confirmDelete = () => {

        // Confirm deletion
        let userConfirmed = window.confirm("You are about to delete your post!\nIf you are sure you want to continue, click \"Ok\".");

        if (userConfirmed) {
            // After confirmation, delete from database and redirect to <PostList>
            deletePost(post.id)    // pass in props.history.id OR post.id or something?
            props.history.push('/')
        }
        else {
            // Pass
        }
    }

    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Post Details</h1>

            <p>{post.title}</p>
            <p>{post.imageUrl}</p>
            <p>{post.content}</p>
            <p>{post.publicationDate}</p>
            <p>{post.author}</p>

            <button onClick={() => {
                confirmDelete()
            }}> Delete Post </button>

        </div>
    )
}