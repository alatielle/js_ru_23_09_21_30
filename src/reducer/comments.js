import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'
import { arrayToMap } from '../store/helpers'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            const { user, text } = payload
            const id = action.commentId
            const newComment =  { id, user, text }
            return { ...comments, ...{ [id]: newComment }}
    }

    return comments
}