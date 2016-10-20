import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import Loader from './Loader'
import toggleOpen from './../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import { getRelation } from '../store/helpers'
import { addComment, loadComments } from '../AC/comments'

class CommentList extends Component {

    componentDidMount() {
        const { loadComments, loading, article} = this.props
        if (!loading) loadComments(article.id)
    }

    render() {
        const { article, comments, loading, addComment, isOpen, toggleOpen } = this.props

        if (loading) return <Loader />

        if (!comments || !comments.length) return <div>
            <p>No comments yet</p>
            <NewCommentForm articleId = {article.id} addComment = {addComment}/>
        </div>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const body = isOpen && <div>
                <ul>{commentItems}</ul>
                <NewCommentForm articleId = {article.id} addComment = {addComment}/>
            </div>

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{text}</a>
                {body}
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //form toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default connect((state, props) => {
    const { comments } = state
    const commentArray = comments.get('entities').valueSeq().toArray()
    return {
        comments: commentArray,
        loading: comments.get('loading')
    }

    //comments: getRelation(props.article, 'comments', state)
}, { addComment, loadComments })(toggleOpen(CommentList))