import { DELETE_ARTICLE } from '../constants';
import { SELECT_ARTICLE } from '../constants';

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(selected) {
	return {
        type: SELECT_ARTICLE,
        payload: selected 
    }
}