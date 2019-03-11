/*
* @Author: Rosen
* @Date:   2018-01-23 22:54:28
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-31 14:21:22
*/

class MUtil{
    request(param){
        return new Promise((resolve, reject) => {
            $.ajax({
                type        : param.type        || 'get',
                url         : param.url         || '',
                dataType    : param.dataType    || 'json',
                data        : param.data        || null,
                success     : res => {
                    resolve(res.data, res.msg);

                },
                error       : err => {
                    typeof reject === reject(err.statusText);
                }
            });
        });  
    }
}

export default MUtil;