import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
// import { normalizedComments } from '../fixtures'
import { Record, OrderedMap, Map, List } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    "id": null,
    "user": "",
    "text": ""
})

const defaultComments = recordsFromArray(Comment, [])

const defaultState = new Map({
    loading: false,
    loaded: false,
    // errors: new List([]),
    entities: defaultComments
})

export default (state = defaultState, action) => {

    const { type, payload, response, error, randomId } = action

    switch (type) {
        case (ADD_COMMENT):
            return comments.set(randomId, new Comment({
                id: randomId,
                ...payload
            }))
        // case LOAD_ALL_COMMENTS + START: 
        //     return state
        case LOAD_ALL_COMMENTS + SUCCESS:             
            return state.set('entities', recordsFromArray(Comment, response.records))

    }

    return state
}
