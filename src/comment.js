import React, { Component } from 'react';

class Comment extends Component {

	render() {
		const comment = this.props.comment;

		return (
			<div>
				<h5>{comment.user}</h5>
				<p>{comment.text}</p>
			</div>
		)
	}

}

export default Comment;