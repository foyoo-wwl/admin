import JsonP from 'jsonp'
import Axios from 'axios'
import {message} from 'antd'
class AjaxEasy{
    ajax(option){
        // console.log('ajax herre')
        // if((option.data &&  option.data.isShowLoading) !== false){
        //     loading = document.getElementById('ajaxLoading')
        //     loading.style.display = 'block'
        // }
        let baseApi = ' https://www.easy-mock.com/mock/5c862e9d83bce068aab20486/axiostest'
        return new Promise((resolve,reject)=>{
            Axios({
                url:option.url,
                method:option.method || 'get',
                baseURL:baseApi,
                timeout:5000,
                params:((option.data && option.data.params) || '')
            }).then((res)=>{
                if(res.data.code == 0){
                    resolve(res.data.data)
                }
            },(err)=>{
                message.info('请求失败')
            })
        });
    }
    //检查登录接口是不是合法
    checkLogin(logininfo){
        return new Promise((resolve,reject)=>{
            //判断用户名不能为空
            let userName = $.trim(logininfo.userName),
                password = $.trim(logininfo.password);
            console.log(userName)
            if(userName.length > 1 && password.length > 1){
                resolve({
                    status:false,
                    msg:'用户名密码长度不能大于1'
                })
            }else if(userName.length > 1 && password.length === 1){
                resolve({
                    status:false,
                    msg:'用户名长度不能大于1'
                })                
            }else if(userName.length === 1 && password.length > 1){
                resolve({
                    status:false,
                    msg:'密码长度不能大于1'
                })                
            }else if(userName.length === 1 && password.length === 1){
                resolve({
                    status:true
                })                
            }
        })
    }
    //跳转登录
    doLogin(){
        window.location.href='/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
    //获取url参数
    gerUrlParam(name){
        //xxxx.com?param=1235&param1=123
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null
    }
}
export default AjaxEasy

