import React from 'react';
import TopNav from 'component/top-nav/index.jsx';
import SideNav from 'component/side-nav/index.jsx';
import {Row, Col } from 'antd';

import './theme.scss';

class LayOut extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="wrapper">
                    <Row className='layoutRow' type="flex" justify="start">
                        <Col span={4} style={{background:"#001529"}}>
                            <SideNav></SideNav>
                        </Col>
                        <Col span={20}>
                            <TopNav></TopNav>
                            {this.props.children}
                        </Col>                     
                    </Row>
            </div>
        )
    }
}
export default LayOut;