import { UPDATE_DETAIL } from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    title: '',
    content: ''
})

export default function fn(state = defaultState, action) {
    const { type, title, content } = action
    switch (type) {
        case UPDATE_DETAIL:
            return state.merge({
                title,
                content
            })
        default:
            return state
    }
}
