import './style.css';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {addComment} from '../../AC/comment';

class CommentForm extends Component {
	state = {
		user: '',
		text: ''
		
	}
	render() {		
		return (
			<form className="comments-form">
				<div className="form-group">
					<label>Name</label>
					<input type="text" onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<label>Comment</label>
					<textarea onChange={this.handleTextChange}></textarea>
				</div>
				<div className="form-group">
					<button type="button" onClick={this.addCommentHandler}>Add Comment</button>
				</div>
			</form>
		)		
	}
	addCommentHandler = () =>{
		const {article} = this.props
		// console.log(this.state);
		this.props.addComment(this.state, article);
	}

	handleInputChange = (e) => {
		this.setState({
			user: e.target.value
		})
	}

	handleTextChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}
}

export default connect((state)=>{
	// const { articles } = state;
	// return {articles};
	// console.log(state);
	return {state}
}, {addComment})(CommentForm);