import { ADD_COMMENT } from '../constants'
import md5 from 'md5'

export default store => next => action => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            return next({...action, commentId: md5(payload)})
    }

    return next(action)
}