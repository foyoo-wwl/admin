import React from 'react'
import {Form, Icon, Input, Button, Checkbox,Row,Col,Typography } from 'antd';
import PageTitle from 'page/page-title/index.jsx';
import Ajax from './../../server/ajax.jsx'


const {Title} = Typography;
const _ajax = new MUtil()
class Login extends React.Component {
    handleSubmit(e){
        // Ajax.request({
        // })
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //     console.log(err)
        //     console.log('Received values of form: ', values);
        //     }
        // });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div style={{paddingTop:"50px"}}>
            <PageTitle title='登录'/>
            <Row type="flex" justify="center" align="middle" style={{marginTop:"10px"}}>
                <Col span={6} >
                    <Form onSubmit={()=>this.handleSubmit()} className="login-form">
                        <Form.Item>
                                {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                        </Form.Item>
                        <Form.Item>
                                {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="login-form-button" style={{width:'100%'}} onClick={()=>this.handleSubmit()}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>

      );
    }
  }
  
  export default Form.create()(Login)