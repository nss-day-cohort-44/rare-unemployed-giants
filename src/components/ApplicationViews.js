import React from "react";
import { Route } from "react-router-dom";
import { CategoryProvider } from "./categories/CategoryProvider.js";
import { CategoryList } from "./categories/CategoryList.js";
import { CategoryForm } from "./categories/CategoryForm.js";
import { TagProvider } from "./tags/TagProvider.js";
import { TagList } from "./tags/TagList.js";
import { TagForm } from "./tags/TagForm.js";
import { PostProvider } from "./posts/PostProvider.js";
import { UserProvider } from "./users/UserProvider";
import { PostForm } from "./posts/PostForm";
import { PostList } from "./posts/PostList.js";
import { PostDetail } from "./posts/PostDetail.js";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <CategoryProvider>
          {/* Category List View */}
          <Route
            exact
            path="/categories"
            render={(props) => <CategoryList {...props} />}
          />

          {/* Category Form View */}
          <Route
            exact
            path="/categories/form"
            render={(props) => <CategoryForm {...props} />}
          />
        </CategoryProvider>

        <TagProvider>
          {/* Tag List View */}
          <Route
            exact
            path="/tags"
            render={(props) => <TagList {...props} />}
          />

          <Route path="/tags/form" render={(props) => <TagForm {...props} />} />
        </TagProvider>

        <PostProvider>
          <CategoryProvider>
            <UserProvider>
              {/* Post Form View */}
              <Route
                exact
                path="/posts/create"
                render={(props) => <PostForm {...props} />}
              />

              {/* Post List View */}
              <Route
                exact
                path="/"
                render={(props) => <PostList {...props} />}
              />
              <Route
                exact
                path="/myposts/:user_id(\d+)"
                render={(props) => <PostList {...props} />}
              />

              {/* Post Details View */}
              <Route
                exact
                path="/posts/:postId(\d+)"
                render={(props) => <PostDetail {...props} />}
              />
            </UserProvider>
          </CategoryProvider>
        </PostProvider>
      </main>
    </>
  );
};
