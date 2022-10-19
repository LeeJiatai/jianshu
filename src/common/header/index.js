import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addtion,
    Button,
    SearchWrapper
} from './style'

class Header extends Component {
    render() {
        const { focused, handleFocus, handleBlur } = this.props
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={focused ? 'focused' : ''}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe614;</i>
                    </SearchWrapper>
                </Nav>

                <Addtion>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addtion>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            const action = actionCreators.changeInputFocus(true)
            dispatch(action)
        },

        handleBlur() {
            const action = actionCreators.changeInputFocus(false)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
