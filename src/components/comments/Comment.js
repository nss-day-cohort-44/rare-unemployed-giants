import React from 'react'

export const Comment = props => (

    <div className="comments">
        <p className="subject"></p>
        <p className="content">{props.content}</p>
        <p className="content">{props.author.name}</p>
    </div>
)