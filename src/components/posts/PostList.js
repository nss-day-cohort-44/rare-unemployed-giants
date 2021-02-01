import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "./PostProvider";
import { Post } from "./Post";
import "./PostList.css";

export const PostList = (props) => {
  const { posts, getPosts, getPostsByUser } = useContext(PostContext);
  const [workingPosts, setWorkingPosts] = useState([]);

  const user = parseInt(localStorage.getItem("rare_user_id"));

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const userPosts = posts.filter((p) => p.id === user);
    setWorkingPosts(userPosts);
  }, [props.match.params]);

  return (
    <div className="postContainer">
      <div className="posts">
        {workingPosts
          ? workingPosts.map((post) => {
              return (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  image={post.image}
                ></Post>
              );
            })
          : posts.map((post) => {
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
