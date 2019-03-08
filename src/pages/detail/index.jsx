import React from 'react'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";
import { LocaleProvider, DatePicker, message } from 'antd';
export default class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: null,
        };
    }  
    render(){
        return(
            <div>
                detail
            </div>
        )
    }
}