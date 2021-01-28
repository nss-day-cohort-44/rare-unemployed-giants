import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        <CategoryProvider>
            <Route exact path="/categories" render={(props) => {
                        return <CategoryList history={props.history} />
                    }} />
        </CategoryProvider>
        </main>
    </>
}
