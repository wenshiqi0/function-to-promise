/**
 * Created by Administrator on 2015/8/18.
 */

function *fromNode(func){
    var asyncFunc = func;
    return new Promise(function(resolve,reject){
        var cb = function(err,res){
            if(err)reject(err);
            resolve(res);
        }
        asyncFunc(cb)
    })
}

module .exports =fromNode;