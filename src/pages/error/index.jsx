import React from 'react'
import {message} from 'antd'
export default class ErrorPage extends React.Component{
    componentWillMount(){
        this.info()
    }
    info(){
        message.info('错误页面，3秒后跳转到首页');
        setTimeout(()=>{
            this.props.history.push('/')
        },3000)      
    }
    render(){
        return(
            <div id='errprPage'>
                   
            </div>
        )
    }
}
