import React,{Fragment}from 'react'
import { Table,Row,Col,Button,Input,message,Select } from 'antd';
import {Link} from 'react-router-dom'
import AjaxEasy from 'server/index.js'
import json from './demo.js'

const _ajax = new AjaxEasy()
const Search = Input.Search;
const Option = Select.Option;
export default class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading: false,
            data:json.data.item_list,
            selectId:0
        };
    }
    componentDidMount(){
            _ajax.ajax({
                url:'productlist',
                method:'get'
            }).then((res)=>{
                this.setState({
                    data:res.item_list,
                    _data:JSON.stringify(res.item_list)
                })
            })   
            
    }
    wwl(id,record,index){
        let _data = this.state.data;
        for(let i=0,_len=_data.length;i<_len;i++){
           if(_data[i].ID == id){
                if(_data[i].status == 1){
                    _data[i].status = 0
                }else{
                    _data[i].status = 1
                }
                this.setState({
                    data:_data
                })
           }
        }
    }
    listSearch(value){
        _ajax.ajax({
            url:'productsearch',
            method:'post',
            data:{
                value:value
            }
        }).then((res)=>{
            message.info('搜索成功')
            setTimeout(()=>{
                this.props.history.push('/product/index/'+this.state.selectId)
            },1000)         
        })        
    }
    handleChange(e){
        this.setState((perveData)=>{
            perveData.selectId=e
        })
    }
    render() {
        const columns = [
            {
                title:'ID',
                dataIndex:'ID',
                key:'id',
                width:200,
            },
            {
                title:"商品",
                key:'goods',
                width:200,
                render: (text)=> {
                    return(
                        <Fragment>
                            <p>{text.goods}</p>
                            <p>{text.subtitle.substr(0,10)}</p>
                        </Fragment>
                    )
                }     
            },
            {
                title:"价格",
                dataIndex:"price",
                key:"price",
                width:200
            },
            {
                title:'数量',
                dataIndex:"number",
                key:"num",
                width:200
            },
            {
                title:"状态",
                key:"status",
                width:100,
                render:(text,record,index) =>{
                    return(
                        <Fragment>
                            <p>{parseInt(text.status)?'在售':"下架"}</p>
                            <Button onClick={this.wwl.bind(this, text.ID,index)} type={parseInt(text.status)?"primary":"danger"}>{parseInt(text.status)?'下架':"上架"}</Button>
                        </Fragment>
                    )
                }
            },
            {
                title:"操作",
                key:'deleta',
                render: (text) =>{
                    return(
                        <Fragment>
                            <Link to={`/product/index/${text.ID}`}>查看详情</Link><br/>
                            <Link to={`/product/index/${text.ID}`}>编辑</Link>
                        </Fragment>
                    )          
                },
                width:200
            },
        ];
        return (
            <Fragment>
                <Row style={{marginTop:20}}>  
                    <Col span={4} offset={2}>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="搜索ID"
                            optionFilterProp="children"
                            size="large"
                            onChange={this.handleChange.bind(this)}
                        >
                            {                   
                                this.state.data.map((item)=>{
                                    return(
                                        <Option value={item.ID} key={item.key}>{item.ID}</Option>
                                    )
                                })         
                            }
                        </Select> 

                    </Col>                 
                    <Col span={1} offset={0} onClick={this.listSearch.bind(this)}>
                        <Button type="primary" icon="search" size="large">Search</Button>
                    </Col>                               
                </Row>
                <Row style={{marginTop:20}}> 
                    <Col span={20} offset={2}>
                        <Table columns={columns} dataSource={this.state.data} scroll={{y:400}} bordered={true}/>
                    </Col>              
                </Row>              
            </Fragment>
        );
    }
}
