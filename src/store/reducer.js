import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_DATA } from './actionTypes'

const defaultState = {
    inputVal: '',
    list: []
}

const fn = (state = defaultState, action) => {
    const { type, value, index, list } = action
    const newState = JSON.parse(JSON.stringify(state))
    if ( type === CHANGE_INPUT_VALUE) {
        newState.inputVal = value
        return newState
    } else if (type === ADD_TODO_ITEM) {
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    } else if (type === DELETE_TODO_ITEM) {
        newState.list.splice(index, 1)
        return newState
    } else if (type === INIT_LIST_DATA) {
        newState.list = list
        return newState
    } else {
        return state
    }
}

export default fn
