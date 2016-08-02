import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {...comment, articleId},
        withRandomId: true
    }
}

export function loadAllComments() {
	return {
		type: LOAD_ALL_COMMENTS,
    callAPI: '/api/comment'
	}
}