import { CHANGE_HOME_DATA } from './constants'
import axios from 'axios'

export const changeHomeData = (topicList, articalList, recommendList) => ({
    type: CHANGE_HOME_DATA,
    topicList,
    articalList,
    recommendList
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const { topicList, articalList, recommendList } = res.data.data
            const action = changeHomeData(topicList, articalList, recommendList)
            dispatch(action)
        })
    }
}