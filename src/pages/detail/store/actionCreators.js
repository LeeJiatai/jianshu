import { UPDATE_DETAIL } from './constants'
import axios from 'axios'

export const updateDetail = (title, content) => ({
    type: UPDATE_DETAIL,
    title,
    content
})

export const getDeatil = (id) => {
    console.log(id)
    return (dispatch) => {
        axios.get('/api/detail.json').then(res => {
            const result = res.data.data
            const { title, content } = result
            const action = updateDetail(title, content)
            dispatch(action)
        })
    }
}