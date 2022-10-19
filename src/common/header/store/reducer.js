import { CHANGE_FOCUS } from '../../../store/actionTypes'

const defaultState = {
    focused: false
}

export default function fn(state = defaultState, action) {
    const { type, value } = action
    const newState = JSON.parse(JSON.stringify(state))
    switch (type) {
        case CHANGE_FOCUS:
            newState.focused = value
            break;
        default:
    }

    return newState
}