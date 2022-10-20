import React, { PureComponent } from 'react'
import {
    RecommenWrapper,
    RecommendItem
} from '../style'
import { connect } from 'react-redux'


class Recommend extends PureComponent {
    render() {
        const { recommendList } = this.props
        return (
            <RecommenWrapper>
            {
                recommendList.map(item => {
                    return (
                        <RecommendItem key={item.get('id')} url={item.get('url')}></RecommendItem>
                    )
                })
            }
            </RecommenWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps, null)(Recommend)
