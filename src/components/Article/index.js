import React, { Component, PropTypes } from 'react'
import CommentList from './../CommentList'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    // componentWillMount() {
    //     console.log('---', this.props)
    // }
    // componentDidMount() {
    //     console.log('---', 'mounted', this.refs.toggler)
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log('---', this.props.isOpen, nextProps.isOpen)
    // }

    // componentWillUnmount() {
    //     console.log('---', 'unmounting')
    // }



    render() {
        const { isOpen, openArticle, article: { title, text, comments } } = this.props;
            // console.log(isOpen);
            const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null

            return (
                <div className="article">
                    <h1 onClick = {openArticle}>{ title }</h1>
                    <CSSTransitionGroup transitionName="article" transitionEnterTimeout={500} transitionLeaveTimeout = {300}>
                        {body}
                    </CSSTransitionGroup>
                </div>
            )

    }
}

export default Article