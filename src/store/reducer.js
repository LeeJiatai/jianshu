import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes' 

const defaultState = {
    inputVal: '',
    list: []
}

export default function reducer(state = defaultState, action) {
    const newState = JSON.parse(JSON.stringify(state))
    const { type, value, index } = action

    switch (type) {
        case CHANGE_INPUT_VALUE:
            newState.inputVal = value
            break;
        case ADD_ITEM:
            newState.list.push(newState.inputVal)
            newState.inputVal = ''
            break;
        case DELETE_ITEM:
            newState.list.splice(index, 1)
            break
        default:
    }
    return newState
}
