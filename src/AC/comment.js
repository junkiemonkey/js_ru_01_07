import { ADD_COMMENT } from '../constants';

export function addComment(comment, article) {
    return {
        type: ADD_COMMENT,
        payload: { comment },
        article: article
    }
}