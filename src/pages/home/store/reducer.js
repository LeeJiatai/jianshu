import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA } from './constants'

const defaultState = fromJS({
    topicList: [],

    articalList: [],

    recommendList: []
})

export default function fn(state = defaultState, action) {
    const { type, topicList, articalList, recommendList } = action
    switch (type) {
        case CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(topicList),
                articalList: fromJS(articalList),
                recommendList: fromJS(recommendList),
            })
        default:
            return state
    }
}