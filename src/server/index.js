import JsonP from 'jsonp'
import Axios from 'axios'

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
            })
        });
    }
    //跳转登录
    doLogin(){
        window.location.href='/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
    //获取url参数
    gerUrlParam(name){
        //xxxx.com?param=1235&param1=123

        let queryString = window.location.search.split('?')[1] || [],
            reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null
    }
}
export default AjaxEasy

