import React from 'react'
import { Tabs } from 'antd'
import Demo from './demo/index'
import './index.css'

const TabPane = Tabs.TabPane

export default class Test extends React.Component {
  constructor(){
    super()
    this.state = {
      activeKey: '1'
    }
  }
  handleTabChange = key =>{
    this.setState({
      activeKey: key
    })
  }
  render() {
    return (
      <div className='system-wrapper'>
        <div className='system-title'>测试页面</div> 
        <div className='system-line'></div>
        <div className='system-content'></div>
        <Tabs activeKey={this.state.activeKey} tabPosition='left' onChange={this.handleTabChange} >
          <TabPane forceRender={false} tab="小测试1" key="1"><Demo/></TabPane>
          <TabPane forceRender={false} tab="小测试2" key="2"><Demo/></TabPane>
        </Tabs>
      </div>
    );
  }
}
