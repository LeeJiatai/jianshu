import { CHANGE_FOCUS } from './actionTypes'

export function changeInputFocus(value) {
    return {
        type: CHANGE_FOCUS,
        value
    }
}