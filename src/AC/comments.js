import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import $ from 'jquery'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

/*
export function loadComments(articleId) {
    return {
        type: LOAD_COMMENTS,
        callAPI: `/api/comment?article=${articleId}`
    }
}*/

export function loadComments(articleId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START
        })

        setTimeout(() => {
            $.get(`/api/comment?article=${articleId}`)
                .done(response => dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    response
                }))
        }, 1000)
    }
}