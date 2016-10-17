import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import toggleOpen from './../decorators/toggleOpen'
//import NewCommentForm from './NewCommentForm'

function CommentList(props) {

    const { comments, isOpen, toggleOpen, addComment, articleId } = props
    const newCommentForm =  <NewCommentForm addComment={addComment} articleId={articleId}/>;
    if (!comments || !comments.length) return <div><p>No comments yet</p>{newCommentForm}</div>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <div><ul>{commentItems}</ul>{newCommentForm}</div>

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
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