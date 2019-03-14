import React from 'react'
import {Form, Icon, Input, Button, Checkbox,Row,Col,Typography } from 'antd';
import PageTitle from 'page/page-title/index.jsx';
import AjaxEasy from 'server/index.js'
import MUtil from 'util/mm.jsx'
import { Modal } from 'antd';

const _user_ = new AjaxEasy()
const _util = new MUtil()
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect:_user_.gerUrlParam('redirect') || '/'
        }
    }
    componentWillMount(){
        document.title = '登陆'
    }
    handleSubmit(){      
        const _redirect = this.state.redirect
        const _this = this
        this.props.form.validateFields((err, values) => {        
            if (!err) {
                _user_.checkLogin(values).then((res)=>{
                    if(!res.status){
                        Modal.error({
                            title:'登录',
                            content:res.msg
                        })                        
                    }else{
                        _user_.ajax({
                            method:'post',
                            url:'/login',
                            data:{
                                userName:values.userName,
                                password:values.password
                            }
                        }).then((res)=>{                  
                            if(values.userName === res.userName && values.password=== res.password){
                                _util.setStorage('userInfo',res)
                                Modal.success({
                                    title:'登录',
                                    content:'登录成功',
                                    onOk:function(){
                                        _this.props.history.push(_redirect)
                                    }
                                })
                            }else{
                                Modal.error({
                                    title:'登录',
                                    content:'账号密码错误'
                                })
                            }
                        }) 
                    }
                })
            
            }
        });
    }
    submit(e){
        if(e.keyCode == 13){
            this.handleSubmit()
        }
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
                                <Input 
                                    prefix={<Icon type="user" 
                                        style={{ color: 'rgba(0,0,0,.25)' }} 
                                    />} 
                                    onKeyUp = {e => this.submit(e)}
                                    placeholder="用户名" />                                    
                                )}
                        </Form.Item>
                        <Form.Item>
                                {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" 
                                onKeyUp = {e => this.submit(e)}
                                />
                                )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" 
                                className="login-form-button" 
                                style={{width:'100%'}} 
                                onClick={()=>this.handleSubmit()}                              
                            >
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