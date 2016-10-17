import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'
import { Record } from 'immutable'

const CommentRecords = normalizedComments.map(comment => Record(comment));
const comment = new Record({id: '', user: '', text: ''})

export default (comments = CommentRecords.map(Comment => new Comment()), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            const { user, text } = payload
            const id = action.commentId
            return [...comments, comment({ id, user, text })]
        //в сторе все лежит правильное, но в комментлист новый комментарий приходит как undefined :(
    }

    return comments
}