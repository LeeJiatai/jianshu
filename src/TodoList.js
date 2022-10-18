import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inputValChangeAction, addItemAction, deleteItemAction } from './store/actionCreators'

class TodoList extends Component {  
    render() {
        const { inputVal, list, changeInputVal, handleBtnClick, handleDeleteItem } = this.props
        return (
            <div>
                <div>
                    <input
                        value={inputVal}
                        onChange={changeInputVal}
                    />
                    <button onClick={handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index)=> {
                            return (
                                <li
                                    onClick={() => handleDeleteItem(index)}
                                    key={index}
                                >{ item }</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { inputVal, list } = state
    return {
        inputVal,
        list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputVal(e) {
            const value = e.target.value
            const action = inputValChangeAction(value)

            dispatch(action)
        },

        handleBtnClick() {
            const action = addItemAction()

            dispatch(action)
        },

        handleDeleteItem(index) {
            const action = deleteItemAction(index)

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);