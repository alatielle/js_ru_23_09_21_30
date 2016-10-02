import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from './decorators/accordion'

function ArticleList(props) {
    const { articles, openArticleId, openArticle } = props

    const articleComponents = articles.map(article => (
        <li key={article.id}>
            <Article article = {article} isOpen = {article.id == openArticleId}
                     openArticle = {openArticle(article.id)}/>
        </li>
        )
    )
    return (
        <div>
            <ul>
                {articleComponents}
            </ul>
            <Chart />
        </div>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string,
    toggleArticle: PropTypes.func
};

export default accordion(ArticleList)