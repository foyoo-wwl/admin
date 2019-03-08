import React from 'react'
import { Breadcrumb ,Icon } from 'antd';
import {Link} from 'react-router-dom'
import './index.scss'
class TopNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Breadcrumb className='Breadcrumb'>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/detail">detail</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Icon type="pie-chart" />Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
export default TopNav;