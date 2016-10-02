<<<<<<< HEAD
import React from 'react';
import Comment from './Comment';

export default (props) => {
    const { comments } = props;

    let commentComponents = <i>Комментариев нет :(</i>;

    if (comments) {
        commentComponents = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>);
    }

    return (
        <ul>
            {commentComponents}
        </ul>
    );
}
=======
import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

function CommentList(props) {
    const { comments, isOpen, toggleOpen } = props
    if (!comments || !comments.length) return <p>No comments yet</p>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
        </div>
    )
}

export default toggleOpen(CommentList)
>>>>>>> 0dafa1b0a4683fd51fe455da9f264b138830e704
