import React from 'react'
import {Row,Col,Button,Icon,Card} from 'antd'
import PageTitle from 'page/page-title/index.jsx' 
import MUtil from 'util/mm.jsx'
import {Link} from 'react-router-dom';
import AjaxEasy from 'server/index.js'


import './index.scss'

const _axios = new AjaxEasy()
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            topTitle:"首页",
            redirect:false,
            usercount:0,
            productcount:0,
            ordercount:0
        })
    }
    componentDidMount(){     
        this.gethomeData()     
    }
    gethomeData(){
        _axios.ajax({
            url:'/homecount',
            method:'get'
        }).then((res)=>{
            this.setState({
                usercount:res.user,
                productcount:res.goods,
                ordercount:res.order
            })
        })
    }
    _col(){
        return(
            <Row align='middle'>
                <Col span={4} offset={3}>
                    <Link to='/user'>                                                     
                        <Card title="用户总数" bordered={false} style={{backgroundColor:'#c4362a'}} className='card' headStyle={{fontSize:20,color:'#fff'}} hoverable>
                            <p>{this.state.usercount}</p>
                        </Card>
                    </Link>
                </Col>
                <Col span={4} offset={3}>
                    <Link to='/product'>
                        <Card title="商品总数" bordered={false} style={{backgroundColor:'#d24b37'}} className='card' headStyle={{fontSize:20,color:'#fff'}}>
                            <p>{this.state.productcount}</p>
                        </Card>
                    </Link>
                </Col>
                <Col span={4} offset={3}>
                    <Link to='/order'>
                        <Card title="订单总数" bordered={false} style={{backgroundColor:'#e9a6a0'}} className='card' headStyle={{fontSize:20,color:'#fff'}}>
                            <p>{this.state.ordercount}</p>
                        </Card>
                    </Link>
                </Col>
            </Row>
        )
    }
    render(){
        if (this.state.redirect){
            return <Redirect push to="/login" />
        }    
        return(
            <div id='pageWrapper'>
                <PageTitle title={this.state.topTitle}>
                </PageTitle>
                {this._col()}
            </div>
        )
    }
}