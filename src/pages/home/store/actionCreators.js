import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const changeHomeData = (topicList, articalList, recommendList) => ({
    type: CHANGE_HOME_DATA,
    topicList,
    articalList,
    recommendList
})

export const toggleTopShow = (value) => ({
    type: TOGGLE_TOP_SHOW,
    value
})

export const addHomeList = (articalList, page) => ({
    type: ADD_HOME_LIST,
    articalList: fromJS(articalList), 
    page
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

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/moreList.json').then(res => {
            const { articalList } = res.data.data
            const action = addHomeList(articalList, page + 1)
            dispatch(action)
        })
    }
}
