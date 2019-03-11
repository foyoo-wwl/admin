import React from 'react'
import {Typography } from 'antd'

import {Row,Col} from 'antd'
const {Title} = Typography

export default class PageTitle extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        document.title = this.props.title+'-frost'
    }
    render(){
        return(
            <Row id='PageTitle'>
                <Col span={24}>
                    <Title>{this.props.title}</Title>
                    {this.props.children}
                </Col>              
            </Row>
        )
    }
}