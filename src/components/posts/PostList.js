import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "./PostProvider";
import { Post } from "./Post";
import "./PostList.css";

export const PostList = (props) => {
  const { posts, getPosts, getPostsByUser } = useContext(PostContext);
  const { post, setPost } = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const userPosts = posts.filter((p) => p.user_id === post.user_id);
    setPost(userPosts);
  }, [getPostsByUser]);

  useEffect(() => {
    setPost(posts);
  }, [posts]);

  return (
    <div className="postContainer">
      <div className="posts">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
            ></Post>
          );
        })}
      </div>
    </div>
  );
};
