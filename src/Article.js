import React, { Component, PropTypes } from 'react'

import CommentList from './CommentList'

class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { article, isOpen } = this.props

        const body = isOpen ? <section>{article.text}<CommentList comments = {article.comments} /></section> : null
        // <section style = {{display: isOpen ? 'block' : 'none'}}>{article.text}</section>
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        const { article, isOpen, openArticle } = this.props
        const id = isOpen ? null : article.id
        openArticle(id)
    }
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
