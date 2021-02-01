import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return fetch("http://localhost:8088/posts")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`).then((res) => res.json());
  };

  const createPost = (post) => {
    return fetch("http://localhost:8088/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getPosts);
  };

  const getPostsByUser = (user) => {
    return fetch(
      `http://localhost:8088/posts/${user}?_expand=user`
    ).then((res) => res.json());
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        createPost,
        getPostById,
        getPosts,
        getPostsByUser,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
