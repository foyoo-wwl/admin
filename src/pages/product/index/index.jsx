import React,{Fragment}from 'react'
import { Table,Row,Col,Button} from 'antd';
import {Link} from 'react-router-dom'
import AjaxEasy from 'server/index.js'
import json from './demo.js'


const _ajax = new AjaxEasy()
export default class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading: false,
            data:null
        };
    }
    componentDidMount(){
            _ajax.ajax({
                url:'productlist',
                method:'get'
            }).then((res)=>{
                this.setState({
                    data:res.item_list
                })
            },()=>{
                this.setState({
                    data:json.data.item_list
                })   
            })
     
    }
    findData(){
    }
    wwl(id,record,index){
        let _data = this.state.data;
        _data.map((item)=>{
            console.log(item.ID)
        })

        // _data[index].status = _data[index].status == 1 ? 0 :1;
        // this.setState({
        //     data:_data
        // })
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
                    <Col span={20} offset={2}>
                        <Table columns={columns} dataSource={this.state.data} scroll={{y:500}} bordered={true}/>
                    </Col>              
                </Row>              
            </Fragment>
        );
    }
}
