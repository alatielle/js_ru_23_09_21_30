import React, { Component } from 'react'
import CommentList from './CommentList';

export default class Article extends Component {

    constructor(props) {
        super();
        this.state = {
            isOpen: false,
            //этот стейт лучше внести в CommentList
            showComments: false
        }
    }

    render() {
        const { article } = this.props;
        const { isOpen, showComments } = this.state;
        console.log('---', this.state);

        const body = isOpen ? <section>{article.text}</section> : null;
        const linkText = showComments ? 'Спрятать комментарии' : 'Показать комментарии';
        const link = isOpen? <a href='#' onClick = {this.toggleComments} >{linkText}</a> : null;
        const comments = showComments ? <CommentList comments = {article.comments} /> : null;

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
                {link}
                {comments}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = ev => {
        this.setState({
            showComments: !this.state.showComments
        })
    }
}

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
