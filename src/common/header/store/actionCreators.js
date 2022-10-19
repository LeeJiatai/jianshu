import { CHANGE_FOCUS, INIT_HEADER_LIST, CHANGE_MOUSE, CHANGE_PAGE } from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const changeInputFocus = (value) => ({
    type: CHANGE_FOCUS,
    value
})

export const initHeaderList = (list) => ({
    type: INIT_HEADER_LIST,
    list: fromJS(list),
    totalPage: Math.ceil( list.length / 5 )
})

export const changeMouse = (value) => ({
    type: CHANGE_MOUSE,
    value
})

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const list = res.data.data
            const action = initHeaderList(list)
            dispatch(action)
        })
    }
}
