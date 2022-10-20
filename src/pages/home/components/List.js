import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    ListItem,
    ListInfo
} from '../style'

class List extends Component {
    render() {
        const { articalList } = this.props
        return (
            <div>
                {
                    articalList.map(item => {
                        return (
                            <ListItem key={item.get('id')}>
                                <ListInfo>
                                    <h1 className='title'>{item.get('title')}</h1>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>

                                <img className='pic' src={item.get('pic')} alt=""></img>
                            </ListItem>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articalList: state.getIn(['home', 'articalList'])
}) 

export default connect(mapStateToProps, null)(List)
