import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "./PostProvider";
import { Post } from "./Post";
import "./PostList.css";

export const PostList = (props) => {
  const { posts, getPosts, getPostsByUser } = useContext(PostContext);

  const user = parseInt(localStorage.getItem("rare_user_id"));
  const viewingUserPosts = props.match.params.hasOwnProperty("user_id");

  useEffect(() => {
    if (viewingUserPosts) {
      console.log("test");
      getPostsByUser(user);
    } else {
      getPosts();
    }
  }, []);

  useEffect(() => {
    if (viewingUserPosts) {
      console.log("taco");
      getPostsByUser(user);
    } else {
      getPosts();
    }
  }, [props.match.params]);

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
