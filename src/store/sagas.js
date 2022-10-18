import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { getInitListAction } from './actionCreators' 

function* getInitList() {
    const res = yield axios('http://127.0.0.1:8080/list.json')
    const list = res.data
    const action = getInitListAction(list)
    yield put(action)
}

// generator 函数
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSagas
