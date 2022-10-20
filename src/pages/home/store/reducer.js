import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from './constants'

const defaultState = fromJS({
    topicList: [],

    articalList: [],

    recommendList: [],
    articalPage: 1,
    showScroll: false
})

const changeHomeData = (state, topicList, articalList, recommendList) => {
    return state.merge({
        topicList: fromJS(topicList),
        articalList: fromJS(articalList),
        recommendList: fromJS(recommendList)
    })
}

const addArticalList = (state, articalList, page) => {
    return state.merge({
        articalList: state.get('articalList').concat(articalList),
        articalPage: page
    })
}

export default function fn(state = defaultState, action) {
    const { type, topicList, articalList, recommendList, page, value } = action
    switch (type) {
        case CHANGE_HOME_DATA:
            return changeHomeData(state, topicList, articalList, recommendList)
        case ADD_HOME_LIST:
            return addArticalList(state, articalList, page)
        case TOGGLE_TOP_SHOW:
            return state.set('showScroll', value)
        default:
            return state
    }
}