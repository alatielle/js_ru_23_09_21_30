import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../decorators/toggleOpen'

function CommentList(props) {
    const submitComment = e => {
        e.preventDefault();
        console.log(e.target.comment.value)
    }

    const { comments, isOpen, toggleOpen } = props
    if (!comments || !comments.length) return <p>No comments yet</p>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>
    const newCommentForm = (
        <form onSubmit={submitComment}>
            <input name='comment' placeholder='Your comment'/>
            <button type='submit'>Add Comment</button>
        </form>
    );

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
            {newCommentForm}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //form toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)