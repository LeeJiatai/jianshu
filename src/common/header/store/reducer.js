import { CHANGE_FOCUS, INIT_HEADER_LIST, CHANGE_MOUSE, CHANGE_PAGE } from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    totalPage: 0,
    currentPage: 1
})

export default function fn(state = defaultState, action) {
    const { type, value, list, totalPage, page } = action
    switch (type) {
        case CHANGE_FOCUS:
            return state.set('focused', value)
        case INIT_HEADER_LIST:
            return state.merge({
                list,
                totalPage
            })
        case CHANGE_MOUSE:
            return state.set('mouseIn', value)
        case CHANGE_PAGE:
            return state.set('currentPage', page)
        default:
            return state
    }
}