import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./categories/CategoryProvider.js"
import { CategoryList } from "./categories/CategoryList.js"
import { CategoryForm } from "./categories/CategoryForm.js"
import { TagProvider } from "./tags/TagProvider.js"
import { TagList } from "./tags/TagList.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <CategoryProvider>
                <Route exact path="/categories" render={
                    props => <CategoryList {...props} />
                } />

                <Route exact path="/categories/form" render={
                    props => <CategoryForm {...props} />
                } />
            </CategoryProvider>

            <TagProvider>
                <Route exact path="/tags" render={
                    props => <TagList {...props} />
                } />
            </TagProvider>
        </main>
    </>
}
