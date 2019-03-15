import React from 'react'
import { Table} from 'antd';
import AjaxEasy from 'server/index.js'

const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key:'ID'
    },
    {
    title: '用户名',
    dataIndex: 'user',
    key:'user'
    },
    {
    title: '邮箱',
    dataIndex: 'email',
    key:'email'
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key:'phone'
    },
    {
        title:'注册时间',
        dataIndex:'time',
        key:'time'
    }
];
const _ajax = new AjaxEasy()
export default class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            data:null
        };
    }
    componentDidMount(){
        _ajax.ajax({
            url:'userlist',
            method:'get'
        }).then((res)=>{
            this.setState({
                data:res.item_list
            })
        })
    }
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}
