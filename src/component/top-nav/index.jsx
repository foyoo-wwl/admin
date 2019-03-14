import React                    from 'react';
import { Icon ,Menu, Dropdown}  from 'antd';
import MUtil                    from 'util/mm.jsx'
import { Redirect }             from 'react-router-dom';

const _user_ = new MUtil()
import './index.scss'
class TopNav extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            redirect:false,
            islogin:false
        })
    }
    componentWillMount(){
        this.isLogin()
    }
    Logout(){
        _user_.removeStorage('userInfo')   
        this.setState({redirect: true})
    }
    isLogin(){
        if(this.arrLength(_user_.getStorage('userInfo')) > 0){
            this.setState((preState)=>{
                preState.islogin = true
            })
        }
    }
    arrLength(arr){
        let _len = 0
        for(let item in arr){
            _len++
        }
        return _len
    }
    render(){
        if (this.state.redirect){
            return <Redirect push to="/login" />
        }     
        const menu = (
            <Menu>
              <Menu.Item>
                    <span onClick={this.Logout.bind(this)}><Icon type="export" />退出登录</span>
              </Menu.Item>
            </Menu>
        )
        return(
            <div className="Breadcrumb">
                <Dropdown overlay={menu} trigger={['click']} >
                        <span style={{marginRight:'15px',cursor:'pointer'}}>
                            <Icon type="smile" theme="twoTone" style={{marginRight:'5px'}}/>
                            {
                                this.state.islogin ? '欢迎，adminFrost' : '请登录'
                            }
                        </span>
                </Dropdown>
            </div>

        )
    }
}
export default TopNav;