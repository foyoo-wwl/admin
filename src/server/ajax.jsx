import MUtil from 'util/mm.jsx'
const _mm  = new MUtil();
class Ajax{
    static request(param){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type    :param.type || 'get',
                url     :param.url || 'https://www.easy-mock.com/mock/5c862e9d83bce068aab20486/axiostest/axios/demo',
                dataType:param.dataType || 'json',
                data    :param.data || null,
                success :res=>{
                    resolve(res)
                },
                errpr   :err=>{
                    console.log(err)
                    // reject(err)
                }
            })
        })
        
    }
}
export default Ajax