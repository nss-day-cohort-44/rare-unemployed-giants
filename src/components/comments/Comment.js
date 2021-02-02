import React from 'react'

export const Comment = props => (

    <div className="comments">
        <p className="subject"></p>
        <p className="content">{props.body}</p>
        <p className="content">{props.author}</p>
        <p className="timeStamp">{props.time}</p>
    </div>
)