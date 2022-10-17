import React, { Component, Fragment } from 'react'
import ToDoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  componentDidMount() {
    const list = ['lijiatai']
    this.setState(() => ({
      list: [...list]
    }))
  }

  render() {
    const { inputValue } = this.state
    return (
      <Fragment>
        <div>
          <label htmlFor="inserArea">name:</label>
          <input
            id='inserArea'
            className='input'
            value={ inputValue }
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleBtnClick}
          >提交</button>
        </div>
        <ul>
          {
            this.getToDoItem()
          }
        </ul>
      </Fragment>
    )
  }

  getToDoItem() {
    return this.state.list.map((item, index) => {
      return(
        <ToDoItem
          key={index}
          index={index}
          itemText={item}
          deleteItem={this.handleDeleteItem}
        />
      )
    })
  }

  handleInputChange(e) {
    this.setState(() => ({
      inputValue: e.target.value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }))
  }

  handleDeleteItem(index) {
    

    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)

      return {
        list
      }
    })
  }
}

export default TodoList
