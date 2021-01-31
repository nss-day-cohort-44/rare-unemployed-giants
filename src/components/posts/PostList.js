import React, { useContext, useEffect, useState, useRef } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"
import "./PostList.css"

export const PostList = props => {
    const { posts, getPosts } = useContext(PostContext)

    useEffect(() => { getPosts()}, [])


    return (
        <div className="postContainer">
            <div className="posts">
            {posts.map(post => {
                            return (<Post key={post.id} id={post.id} title={post.title} image={post.image}></Post>)
                        })
                        }
            </div>
        </div>
    )
}