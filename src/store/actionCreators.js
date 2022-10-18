import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_DATA, GET_INIT_LIST } from './actionTypes'

export const getChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const getInitListAction = (list) => ({
    type: INIT_LIST_DATA,
    list
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios('http://127.0.0.1:8080/list.json').then(res => {
//             const list = res.data
//             const action = getInitListAction(list)
//             dispatch(action)
//         })
//     }
// }