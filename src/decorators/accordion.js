import React from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            //не привязывайся к названию сущности, в декораторах должен быть общий функционал. Используй, например, openItemId 
            openArticleId: null
        }

        openArticle = id => {
            this.setState({
                //А еще была задача закрывать статью при клике на активную. Надо здесь добавить проверку
                openArticleId: id
            })
        }

        render() {
            return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
        }
    }
}
