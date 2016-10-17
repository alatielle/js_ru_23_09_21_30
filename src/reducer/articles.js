import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { Map, Record } from 'immutable'

const ArticleRecords = normalizedArticles.map(article => Record(article));

export default (articles = ArticleRecords.map(record => new record()), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.get('id') != payload.id)
        case ADD_COMMENT:
            const { articleId } = payload
            const changedArticle = articles.find(record => record.get('id') == articleId)
            const idx = articles.indexOf(changedArticle)
            const newArticle = ArticleRecords[idx]({comments: [...changedArticle.get('comments'), action.commentId]})
            const oldArticles = articles.filter(article => article.get('id') != articleId)
            return [...oldArticles, newArticle]
    }
    return articles
}