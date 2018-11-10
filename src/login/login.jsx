import { Form, Input, Button, message, Row, Col } from 'antd'
import React from 'react'
import axios from 'axios'
import './login.css'
import { host, port } from '../host.js'
const FormItem = Form.Item

class Login extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: null,
      password: null
    }
  }
  async handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post(`${host}:${port}/user/login?userName=${values.userName}&password=${values.password}`, {})
          .then(res => {
            if (res.data) {

            }
          }).catch(err => {
            message.error('登录失败！'+ err)
          })
      } else {
        console.log('Error' + err)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }
    return (
      <div className='login-wrapper'>
        <Form>
          <div className='login-title'>
            <div className='login-title-content'>欢迎登陆</div>
          </div>
          <div className='login-content'>
          <FormItem className='login-item' {...formItemLayout} label='用户名'>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" style={{width: '300px'}}/>
            )}
          </FormItem>
          <FormItem className='login-item' {...formItemLayout} label='密码'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input type="password" placeholder="Password" style={{width: '300px'}}/>
            )}
          </FormItem>
          <div className='login-button' >
            <Button onClick={this.handleSubmit.bind(this)}>登录</Button>
          </div>
          </div>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login)
