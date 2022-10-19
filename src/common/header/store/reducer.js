import { CHANGE_FOCUS } from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
})

export default function fn(state = defaultState, action) {
    const { type, value } = action
    switch (type) {
        case CHANGE_FOCUS:
            return state.set('focused', value)
        default:
            return state
    }
}