import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.itemText !== this.props.itemText) {
            return true
        } else {
            return false
        }
    }

    render() {
        const { itemText } = this.props
        return (
            <li
                onClick={this.handleClick}
            >
                { itemText }
            </li>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    itemText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hi'
}

export default TodoItem
