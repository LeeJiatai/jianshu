import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addtion,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'

class Header extends Component {
    render() {
        const { focused, handleFocus, handleBlur, list } = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
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
                                onFocus={() => handleFocus(list)}
                                onBlur={handleBlur}
                                className={focused ? 'focused' : ''}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused search' : 'iconfont search'}>&#xe614;</i>

                        { this.getListArea() }
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

    getListArea() {
        const { focused, list, currentPage, totalPage, handleMoveEnter, handleMoveleave, mouseIn, handleChangePage }  = this.props
        const newList = list.toJS()
        const showList = []

        if (newList.length) {
            for (let i = (currentPage - 1) * 5; i < currentPage * 5; i++) {
                showList.push(
                    <SearchInfoItem key={ newList[i] }>{ newList[i] }</ SearchInfoItem>
                )
            }
        }
        
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMoveEnter}
                    onMouseLeave={handleMoveleave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchSwitch
                            onClick={() => handleChangePage(currentPage, totalPage, this.spinIcon)}
                        >
                            <i
                                ref={(icon) => { this.spinIcon = icon}}
                                className='iconfont'
                            >&#xe614;</i>
                            换一换
                        </SearchSwitch>
                    </SearchInfoTitle>

                    <SearchInfoList>
                        {
                            showList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        totalPage: state.getIn(['header', 'totalPage']),
        currentPage: state.getIn(['header', 'currentPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list) {
            if (!list.size) {
                dispatch(actionCreators.getList())
            }
            const action = actionCreators.changeInputFocus(true)
            dispatch(action)
        },

        handleBlur() {
            const action = actionCreators.changeInputFocus(false)
            dispatch(action)
        },

        handleMoveEnter() {
            const action = actionCreators.changeMouse(true)
            dispatch(action)
        },

        handleMoveleave() {
            const action = actionCreators.changeMouse(false)
            dispatch(action)
        },

        handleChangePage(currentPage, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            originAngle = originAngle ? parseInt(originAngle) : 0
            const nextAngle = originAngle + 360
            spin.style.transform = `rotate(${nextAngle}deg)`
            const nextPage = currentPage >= totalPage ? 1 : currentPage + 1
            const action = actionCreators.changePage(nextPage)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
