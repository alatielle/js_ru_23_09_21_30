import React from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        }

        openArticle = id => {
            this.setState({
                openArticleId: id
            })
        }

        render() {
            return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
        }
    }
}