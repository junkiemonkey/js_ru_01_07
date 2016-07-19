import { articles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { SELECT_ARTICLE } from '../constants'

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
        case SELECT_ARTICLE:
        		if(!payload.length) return articles = defaultArticles;
        		return articles.filter(article => {
        			for(var i =0; i<payload.length; i++){
        				return article.id == payload[i].value
        			}
        			
        		})
    }
    return articles
}