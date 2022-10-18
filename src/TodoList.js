import React, { Component } from 'react'
import store from './store/index'
import { getChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators'
import TodolistUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = store.getState()

        this.handleChange = this.handleChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.deleteIte = this.deleteItem.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    componentDidMount() {
        const action = getInitList(getInitList)
        store.dispatch(action)
    }

    render() {
        const { inputVal, list } = this.state
        return (
            <TodolistUI
                inputVal={inputVal}
                list={list}
                handleChange={this.handleChange}
                deleteItem={this.deleteItem}
                handleBtnClick={this.handleBtnClick}
            />
        )
    }

    handleChange(e) {
        const value = e.target.value
        const action = getChangeAction(value)
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }

    handleBtnClick() {
        const action = getAddItemAction()

        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(() => store.getState())
    }
}

export default TodoList
