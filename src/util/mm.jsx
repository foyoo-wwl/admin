const baseUrl = 'https://www.easy-mock.com/mock/5c862e9d83bce068aab20486/axiostest'
class MUtil{   
    request(param){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type:param.type || 'get',
                url:baseUrl+param.url,
                dataType:param.dataType || 'json',
                data:param.data || null,
                success(res){
                    //请求成功
                    if(0 === res.code){
                        typeof resolve === 'function' && resolve(res.msg && res.data)
                        
                    }else{
                        typeof reject === 'function' && reject(res.msg)
                    }
                },
                error(err){
                    typeof reject === 'function' && reject(err.statusText)
                }
            })
        })
    }
}

export default MUtil;