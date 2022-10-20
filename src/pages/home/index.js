import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { getHomeInfo, toggleTopShow } from './store/actionCreators'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.handleScrollTop = this.handleScrollTop.bind(this)
    }

    render() {
        const { showScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner' alt="" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210721%2F1626870878SHnl1L.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668780617&t=ff6daa65de76fb79b7a94bfbd93f27bd"></img>
                
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    showScroll ?
                    <BackTop
                        onClick={this.handleScrollTop}
                    >back</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = getHomeInfo()
        dispatch(action)
    },

    changeScrollTopShow() {
        const scrollTop = document.documentElement.scrollTop
        dispatch(toggleTopShow(scrollTop > 400))
    }
})

export default connect(mapStateToProps, mapDispatch)(Home)
