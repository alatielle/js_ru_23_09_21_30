import React, { Component, PropTypes } from 'react'

import CommentList from './CommentList'

function Article(props) {
    const { article, isOpen, openArticle } = props

    const body = isOpen ? <section>{article.text}<CommentList comments = {article.comments} /></section> : null
    // <section style = {{display: isOpen ? 'block' : 'none'}}>{article.text}</section>
    return (
        <div>
            <h3 onClick = {openArticle}>{article.title}</h3>
            {body}
        </div>
    )

}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
    }),
    isOpen: PropTypes.bool,
    openArticle: PropTypes.func
};

export default Article

/*
export default (props) => {
    const { article } = props
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
