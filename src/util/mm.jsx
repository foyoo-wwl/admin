const baseUrl = 'https://www.easy-mock.com/mock/5c862e9d83bce068aab20486/axiostest'
class MUtil{   
    //存储内容
    setStorage(name,data){
        let dataType = typeof data;
        //json类型
        if(typeof data === 'object'){
            window.localStorage.setItem(name,JSON.stringify(data))
        }
        //基础类型
        else if(['number','string','boolean'].indexOf(dataType)>=0){
            window.localStorage.setItem(name,data)
        }else{
            alert('该类型不能用于本地存储')
        }
    }
    //取存储内容
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data)
        }else{
            return ''
        }
    }
    //删除存储
    removeStorage(name){
        window.localStorage.removeItem(name)
    }
}

export default MUtil;