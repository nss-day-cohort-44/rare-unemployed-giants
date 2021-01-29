import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "./PostProvider";
import { UserContext } from "../users/UserProvider";
import { CategoryContext } from "../categories/CategoryProvider.js";
import { HumanDate } from "../utils/HumanDate.js";

export const PostForm = (props) => {
  const { posts, createPost, getPosts } = useContext(PostContext);
  const { user, getUserById } = useContext(UserContext);
  const { categories, getCategories } = useContext(CategoryContext);
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
    getCategories();
  }, []);
  useEffect(() => {
    getPosts();
  }, []);

  const createNewPost = () => {
    const categoryId = parseInt(categories.id);
    createPost({
      userId: parseInt(localStorage.getItem("rare_user_id")),
      category: categoryId,
      title: post.title,
      publicationDate: HumanDate,
      content: post.content,
      approved: post.approved,
      imageUrl: post.imageUrl,
    }).then(() => props.history.push("/posts"));
  };

  return (
    <form className="postForm">
      <h2 className="postForm__title">New Post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            className="form-control"
            placeholder="title"
            defaultValue={post.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="categoryId">Category: </label>
          <select
            name="categoryId"
            className="form-control"
            value={post.categoryId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a category</option>
            {categories.map((e) => (
              <option key={e.id} value={e.id}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Content: </label>
          <textarea
            type="text"
            name="content"
            className="form-control"
            value={post.content}
            onChange={handleControlledInputChange}
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imageUrl">Image: </label>
          <input
            type="image"
            name="imageUrl"
            className="form-control"
            value={post.imageUrl}
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          createNewPost();
        }}
        className="btn btn-primary"
      >
        {" "}
        Submit
      </button>
    </form>
  );
};
