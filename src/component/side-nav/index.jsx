import React from 'react'
import { Menu, Icon, Typography , Card ,Avatar} from 'antd';
import {NavLink,NavNavLink} from 'react-router-dom'

import menuList from './navConfig.js'

import './index.scss'
const { Title } = Typography;
const { Meta } = Card;
const {SubMenu} = Menu;
class SideNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        }
    }   
    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode
        })
    }
    toggleCollapsed(){
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    renderMenu(data){
        console.log(data)
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon}/><span>{item.title}</span></span>}>
                        {this.renderMenu(item.children)}
                    </SubMenu>                   
                )
            }
            return(
                    <Menu.Item key={item.key} >
                        <NavLink to={item.key} 
                            activeClassName='active-menu' 
                        >
                            <Icon type={item.icon} />{item.title}
                        </NavLink>
                    </Menu.Item>   
            )
        })
    }
    render(){
        return(
            <div>
                <Card
                    hoverable
                    style={{ width: '100%',borderRadius:0,border:'none'}}
                    cover={<img alt="example" src="dist/assets/logo.svg" style={{width:'60%',margin:"0 auto"}} />}
                >
                    <Meta 
                        avatar={<Avatar src="dist/assets/wx.jpg" />}
                        title='frost'
                        description="6324 upup!!!"
                    />
                </Card>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default SideNav;

 