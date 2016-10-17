import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { List, Map, fromJS } from 'immutable'

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articles)
                .filter(id => id != payload.id)
                .reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
        case ADD_COMMENT:
            const { articleId } = payload
            const { comments, ...rest } = articles[articleId]
            const newArticle = {...{comments: new List(comments).push(action.commentId).toArray()}, ...rest}
            return new Map(articles).set([articleId], newArticle).toObject()
    }
    return articles
}