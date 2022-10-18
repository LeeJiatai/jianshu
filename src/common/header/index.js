import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
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
    constructor(props) {
        super(props)

        this.state = {
            focused: false
        }

        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    render() {
        const { focused } = this.state
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
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
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

    handleFocus() {
        this.setState(() => ({
            focused: true
        }))
    }

    handleBlur() {
        this.setState(() => ({
            focused: false
        }))
    }
}

export default Header
