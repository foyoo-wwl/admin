import React from 'react'
import { Menu, Icon, Button , Typography , Card ,Avatar  } from 'antd';

const { Title } = Typography;
const { Meta } = Card;
class SideNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        }
    }   
    toggleCollapsed(){
        this.setState({
          collapsed: !this.state.collapsed,
        });
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
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
export default SideNav;