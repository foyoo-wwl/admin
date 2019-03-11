import React                from 'react'
import { Breadcrumb ,Icon ,Menu, Dropdown} from 'antd';
import {Link}               from 'react-router-dom'
import './index.scss'
class TopNav extends React.Component{
    constructor(props){
        super(props)
    }
    Logout(){
        console.log('logout')
    }
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                    <span><Icon type="export" />退出登录</span>
              </Menu.Item>
            </Menu>
        )
        return(
            <div className="Breadcrumb">
                <Dropdown overlay={menu} trigger={['click']}>
                        <span onClick={this.Logout} style={{marginRight:'15px',cursor:'pointer'}}>
                            <Icon type="smile" theme="twoTone" style={{marginRight:'5px'}}/>欢迎，adminFrost
                        </span>
                </Dropdown>
            </div>

        )
    }
}
export default TopNav;