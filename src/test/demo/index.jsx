import { Table, Input, Button, message, DatePicker } from 'antd'
import React from 'react'
import axios from 'axios'
import { host, port } from '../../host.js'

const Search = Input.Search
const { RangePicker } = DatePicker

class Demo extends React.Component {
  constructor(props) {
    super()
    this.state = {
      addModalVisible: false,
      data: [
        {id: 123, name: 'ert', userName: 'userName', createDate: '1981-12-23'},
        {id: 123, name: 'ert', userName: 'userName', createDate: '1981-12-23'},
        {id: 123, name: 'ert', userName: 'userName', createDate: '1981-12-23'},
        {id: 123, name: 'ert', userName: 'userName', createDate: '1981-12-23'},
      ],
      pagination:{
        current: 1,
        defaultPageSize: 10,
        pageSize: 10
      },
      recordDate: {},
      type: null
    }
  }

  render() {
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, 
    {
      title: '创建用户',
      dataIndex: 'userName',
      key: 'userName',
    }, 
    {
      title: '创建时间',
      dataIndex: 'createDate',
      key: 'createDate',
    }, 
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" style={{ paddingRight: '10px'}} >删除</a>
          <a href="javascript:;" >修改</a>
        </span>
      ),
    }];
    return (
      <div className='server-wrapper'>
        <div className='server-add-button' style={{display: 'inline-block'}}><Button type='primary' onClick={this.handleClickAdd}>新增</Button></div>
        <div className='server-content'>
        <Table bordered={true} pagination={{...this.state.pagination, onChange: this.handlePaginationChange}} columns={columns} dataSource={this.state.data} />
        </div>

      </div>
    )
  }
}

export default Demo
