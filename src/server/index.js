import JsonP from 'jsonp'
import Axios from 'axios'
import { Modal } from 'antd';
export default class axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response.status === 'success'){
                    resolve(response)
                }else{
                    reject(response.message)
                }
            })
        })
    }

    static ajax(option){
        let loading;
        if((option.data &&  option.data.isShowLoading) !== false){
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block'
        }
        let baseApi = ' https://www.easy-mock.com/mock/5c862e9d83bce068aab20486/axiostest'
        return new Promise((resolve,reject)=>{
            Axios({
                url:option.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:((option.data && option.data.params) || '')
            }).then((res)=>{

            })
        });
    }
}