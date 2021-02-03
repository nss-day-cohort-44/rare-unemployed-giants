import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "./PostProvider";
import { CategoryContext } from "../categories/CategoryProvider.js";

export const PostForm = (props) => {
  const { createPost, getPosts } = useContext(PostContext);
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
    getCategories().then(getPosts);
  }, []);

  const user = parseInt(localStorage.getItem("rare_user_id"));

  const createNewPost = () => {
    const categoryId = parseInt(categories.id);
    //grabs current time in seconds since January 1970 and converts that into human readable format
    const timeElapsed = Date.now()
    const now = new Date(timeElapsed)
    const readableTime = now.toDateString()

    createPost({
      user_id: parseInt(localStorage.getItem("rare_user_id")),
      category_id: categoryId,
      title: post.title,
      publication_date: readableTime,
      content: post.content,
      image_url: post.imageUrl,
      approved: 1,
    }).then(() => props.history.push(`/myposts/${user}`));
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
            type="text"
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
