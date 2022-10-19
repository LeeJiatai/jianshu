import React, { Component } from 'react'
import Header from './common/header/index'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


class App extends Component {  
    render() {
        return (
            <Provider store={ store }>
                <div>
                    <Header />

                    <BrowserRouter>
                        <Routes>
                            <Route path="/" exact element={ <Home /> } />
                            <Route path="/detail" exact element={ <Detail />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

export default App
