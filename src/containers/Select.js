import React, { Component }  from 'react';
import Select from 'react-select';
import { selectArticle } from '../AC/articles'
import { connect } from 'react-redux';

class SelectComponent extends Component{

	state = {
		selectedArticles: null,
	}

	render(){
		
		const { articles } = this.props;
		
		const options = articles.map((article) => ({
            label: article.title,
            value: article.id            
        }))
		return (
			<Select
          options = {options}
          multi = {true}
          value = {this.state.selectedArticles}
          onChange = {this.handleSelectChange}/>
		)
	}
	handleSelectChange = (selectedArticles) => { 
			this.props.selectArticle(selectedArticles)
			this.setState({
				selectedArticles
			})			
			
   }
}

export default connect(({articles}) => ({articles}), 
	{ selectArticle }
)(SelectComponent)