import React, { Component, Fragment } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }

        this.handleAddItem = this.handleAddItem.bind(this)
        this.mapItem = this.mapItem.bind(this)
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    { this.mapItem() }
                </TransitionGroup>
                <button
                    onClick={this.handleAddItem}
                >toggle</button>
            </Fragment>
        )
    }

    mapItem() {
        return this.state.list.map((item, index) => {
            return (
                <CSSTransition
                    timeout={ 1000 }
                    classNames="fade"
                    appear={true}
                    unmountOnExit
                    onEntered = {(el) => {el.style.color = 'blue'}}
                    key={index}
                >
                    <div>{item}</div>
                </CSSTransition>
            )
        })
    }

    handleAddItem() {
        this.setState((prevState) => ({
            list: [...prevState.list, 'item']
        }))
    }
}

export default App
