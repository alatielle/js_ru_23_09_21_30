import { ADD_COMMENT } from '../constants'

export function addComment(articleId, text, user) {
    const action = {
        type: ADD_COMMENT,
        payload: { articleId, text, user }
    }
    return action
}
