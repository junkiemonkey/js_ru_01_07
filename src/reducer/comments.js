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
            let newComm = payload.comment;
    	    //не мутируй payload
    	    //это все равно мутация, ведь payload.comment - ссылочный тип данных, поменял в одном месте - поменялось везде
    	    newComm = {...payload.comment, id: action.commentID}
            // newComm.id = action.commentID;
    		//comments - Map: {commentID: CommentObject}.
            return comments.set(action.commentID, new Comment(newComm));
    		//return comments.set(payload.comment); // что то не то походу...
            console.log(comments);
    		
    }

    return comments
}
