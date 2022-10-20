import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends PureComponent {
    render() {
        const { articalList, handleMore, articalPage } = this.props
        return (
            <div>
                {
                    articalList.map((item, index) => {
                        return (
                            <Link key={index} to="/detail">
                                <ListItem>
                                    <ListInfo>
                                        <h1 className='title'>{item.get('title')}</h1>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>

                                    <img className='pic' src={item.get('pic')} alt=""></img>
                                </ListItem>
                            </Link>
                        )
                    })
                }

                <LoadMore
                    onClick={() => { handleMore(articalPage) }}
                >加载更多{articalPage}</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articalList: state.getIn(['home', 'articalList']),
    articalPage: state.getIn(['home', 'articalPage'])
})

const mapDispatch = (dispatch) => ({
    handleMore(articalPage) {
        dispatch(actionCreators.getMoreList(articalPage))
    }
})

export default connect(mapStateToProps, mapDispatch)(List)
