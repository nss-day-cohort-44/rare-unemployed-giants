import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "./PostProvider";
import { ProfileContext } from "./auth/AuthProvider";

export const PostForm = (props) => {
  const { posts, createPost, getPosts } = useContext(PostContext);
  const { profile, getProfile } = useContext(ProfileContext);
  const [post, setPost] = useState({});

  const handleControlledInputChange = (event) => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newPost = Object.assign({}, post); // Create copy
    newPost[event.target.name] = event.target.value; // Modify copy
    setPost(newPost); // Set copy as new state
  };

  useEffect(() => {
    getPosts();
  }, []);
};