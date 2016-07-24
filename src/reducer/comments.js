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
    		payload.comment.id = action.commentID;    		
    		return comments.set(payload.comment); // что то не то походу...
    		
    }

    return comments
}