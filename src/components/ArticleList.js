import React, { Component }  from 'react'
import { Link } from 'react-router'

class ArticleList extends Component {    

    constructor(props) {
        super(props);
        // this.handleDayClick = this.handleDayClick.bind(this);
        // this.handleResetClick = this.handleResetClick.bind(this);
      }


    render() {

        const { articles } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
           <Link to={`/articles/${article.id}`}>{article.title}</Link>

        </li>)

        return (
            <div>
                <h1>Article list</h1>


                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ArticleList
