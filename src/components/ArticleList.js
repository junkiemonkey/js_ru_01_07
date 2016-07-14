import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import DatePicker, { DateUtils } from 'react-day-picker'; 
import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';

class ArticleList extends Component {    

    state = {
        selectedArticles: null,
        from: null,
        to: null,
        //все хорошо, но этот range лишний
        range: null
    }

    render() {        
        
        const { articles, isItemOpen, toggleOpenItem } = this.props;
        const { from, to } = this.state;

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>Article list</h1>

                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange} />   

                <DatePicker
                    className='myDate'
                    ref="daypicker"
                    numberOfMonths={2}
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.handleDayClick} />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);        
        this.setState(range);
    }

    handleSelectChange = (selectedArticles) => {
        console.log(selectedArticles)
        this.setState({
            selectedArticles
        })
    }
}

export default oneOpen(ArticleList)
