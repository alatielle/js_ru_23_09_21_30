import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {

    };
    //хорошо, но еще user надо было
    state = {
        comment: ''
    }

    handleChange = ev => {
        if (ev.target.value.length > 140) return
        this.setState({
            comment: ev.target.value
        })
    }

    submitComment = ev => {
        ev.preventDefault();
        const { comment } = this.state
        if (!comment.length) return
        console.log(comment)
    }

    render() {
        const { comment } = this.state

        return (
            <form onSubmit={this.submitComment}>
                <input type = "text" value = {comment} onChange = {this.handleChange} placeholder="Your comment" />
                <button disabled={!comment.length} type='submit'>Add Comment</button>
            </form>
        )
    }
}

export default NewCommentForm
