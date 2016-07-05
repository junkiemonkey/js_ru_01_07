import React, { Component } from 'react';
import Comment from './comment';

class CommentsList extends Component {
	state = {
		isOpen: false
	};
	render() {

		const { comments } = this.props;

		const open = this.props.open;

		if(!comments) return null;

		const listComents = comments.map( com => <li key = {com.id}><Comment comment = {com} /></li>);

		const list = this.state.isOpen && open ? <ul>{listComents}</ul> : null;

		return (
			<div>
				<h4 onClick = {this.toggleComment}>Comments</h4>
				{list}
			</div>
		)
	}

	toggleComment = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	

}

export default CommentsList;
