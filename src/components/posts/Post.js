import React from 'react'
import { Link } from "react-router-dom"

export const Post = props => (

    <li className="post__link">
        <Link to={{
            pathname: `/posts/${props.id}`
        }} ><h3>{props.title}</h3>
        <div className="postImage">
            {props.image}
        </div>
        </Link>
    </li>
)