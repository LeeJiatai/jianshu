import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/'
import withRouter from './util'
import {
    DetailWrapper,
    Header,
    Content
} from './style'

class Detail extends PureComponent {
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{ title }</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        const id = this.props.router.params.id
        this.props.getDeatil(id)
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const maoDispatch = (dispatch) => ({
    getDeatil(id) {
        dispatch(actionCreators.getDeatil(id))
    }
})

export default connect(mapStateToProps, maoDispatch)(withRouter(Detail))
