const defaultState = {
    inputVal: '',
    list: []
}

const fn = (state = defaultState, action) => {
    const { type, value } = action
    const newState = JSON.parse(JSON.stringify(state))
    if ( type === 'change_input_value') {
        newState.inputVal = value
        return newState
    } else if (type === 'add_todo_item') {
        newState.list.push(value)
        newState.inputVal = ''
        return newState
    } else {
        return state
    }
}

export default fn
