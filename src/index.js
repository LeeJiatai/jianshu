import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <GlobalStyle />
        <GlobalIconStyle />
        <App />
    </Fragment>
)
