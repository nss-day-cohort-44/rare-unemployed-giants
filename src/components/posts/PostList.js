import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "./PostProvider";
import { Post } from "./Post";

export const PostList = (props) => {
  const { posts, getPosts, getPostsByUser } = useContext(PostContext);

  const user = parseInt(localStorage.getItem("rare_user_id"));
  const viewingUserPosts = props.match.params.hasOwnProperty("user_id");

  //Checks to see if match.params has the property "user_id", and if so only shows posts of logged in user, otherwise shows all
  useEffect(() => {
    if (viewingUserPosts) {
      getPostsByUser(user);
    } else {
      getPosts();
    }
  }, []);

  //Watches to see if match.params changes, and then retries the code to either get all posts or only the current user's accordingly
  useEffect(() => {
    if (viewingUserPosts) {
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
