import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { Map, Record } from 'immutable'

//а зачем ты переделала хранилище назад на массив, мы же говорили, что это не удобно
const ArticleRecords = normalizedArticles.map(article => Record(article));
//что за record с маленькой буквы?
export default (articles = ArticleRecords.map(record => new record()), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.get('id') != payload.id)
        case ADD_COMMENT:
            //а вот и вылазит боком хранение в виде масива
            const { articleId } = payload
            const changedArticle = articles.find(record => record.get('id') == articleId)
            const idx = articles.indexOf(changedArticle)
            const newArticle = ArticleRecords[idx]({comments: [...changedArticle.get('comments'), action.commentId]})
            const oldArticles = articles.filter(article => article.get('id') != articleId)
            return [...oldArticles, newArticle]
    }
    return articles
}
