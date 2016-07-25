import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    "id": null,
    "user": "",
    "text": ""
})

const defaultComments = recordsFromArray(Comment, normalizedComments)

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action;

    // payload.comments.id = action.id;

    switch (type) {
    	case ADD_COMMENT:   
    	    //не мутируй payload
    		payload.comment.id = action.commentID;  
    		//comments - Map: {commentID: CommentObject}. comments.set(action.commentID, new Comment(payload.comment)
    		return comments.set(payload.comment); // что то не то походу...
    		
    }

    return comments
}
