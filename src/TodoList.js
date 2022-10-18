import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = store.getState()

        this.handleChange = this.handleChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() {
        const { inputVal, list } = this.state
        return (
            <div style={{padding: '10px'}}>
                <div>
                    <Input
                        value={inputVal}
                        placeholder='todo info'
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={this.handleChange}
                    />
                    <Button
                        type='primary'
                        onClick={this.handleBtnClick}   
                    >add</Button>
                </div>

                <List
                    style={{marginTop: '20px', width: '600px'}}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>}
                />
            </div>
        )
    }

    handleChange(e) {
        const value = e.target.value
        const action = {
            type: 'change_input_value',
            value
        }
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = {
            type: 'delete_todo_item',
            index
        }

        store.dispatch(action)
    }

    handleBtnClick() {
        const value = this.state.inputVal
        const action = {
            type: 'add_todo_item',
            value
        }

        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(() => store.getState())
    }
}

export default TodoList
