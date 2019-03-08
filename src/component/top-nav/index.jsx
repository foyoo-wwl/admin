import React from 'react'
import { Breadcrumb ,Icon } from 'antd';

import './index.scss'
class TopNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Breadcrumb className='Breadcrumb'>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><Icon type="pie-chart" />Application Center</Breadcrumb.Item>
                <Breadcrumb.Item><Icon type="pie-chart" />Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
export default TopNav;