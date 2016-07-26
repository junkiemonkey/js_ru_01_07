import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    "id": "",
    "date": "",
    "title": "",
    "text": "",
    "comments": []
})

const defaultArticles = recordsFromArray(Article, normalizedArticles)

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)
        case ADD_COMMENT:
            return articles.updateIn([action.article, 'comments'], comments => {
                return comments.concat([action.commentID]);
            });

    }
    //articles.set()
    //articles.update()
    //articles.updateIn([id, 'comments'], comments => ...)
    return articles
}