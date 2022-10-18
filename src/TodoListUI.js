import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'


// const TodolistUI = (props) => {
//     const { inputVal, list, handleChange, deleteItem, handleBtnClick } = props
//     return (
//         <div style={{padding: '10px'}}>
//             <div>
//                 <Input
//                     value={inputVal}
//                     placeholder='todo info'
//                     style={{width: '300px', marginRight: '10px'}}
//                     onChange={handleChange}
//                 />
//                 <Button
//                     type='primary'
//                     onClick={handleBtnClick}   
//                 >add</Button>
//             </div>

//             <List
//                 style={{marginTop: '20px', width: '600px'}}
//                 bordered
//                 dataSource={list}
//                 renderItem={(item, index) => <List.Item onClick={() => {deleteItem(index)}}>{item}</List.Item>}
//             />
//         </div>
//     )
// }

class TodolistUI extends Component {
    render() {
        const { inputVal, list, handleChange, deleteItem, handleBtnClick } = this.props
        return (
            <div style={{padding: '10px'}}>
                <div>
                    <Input
                        value={inputVal}
                        placeholder='todo info'
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={handleChange}
                    />
                    <Button
                        type='primary'
                        onClick={handleBtnClick}   
                    >add</Button>
                </div>

                <List
                    style={{marginTop: '20px', width: '600px'}}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => <List.Item onClick={() => {deleteItem(index)}}>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default TodolistUI