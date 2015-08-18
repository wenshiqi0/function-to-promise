/**
 * Created by Administrator on 2015/8/18.
 */
var fs = require('fs');
var co = require('co');
var fromNode = require('./../app');

//let the callback function promisify

//traditional async flow with node callback function
function nodeTest(cb){
    fs.readFile('1.txt',function(err,res1){
        console.log(res1.toString());
        fs.readFile('2.txt',function(err,res2){
            console.log(res2.toString());
            cb();
        })
    })
}

//co async flow with generator function
function coTest(){
    co(function*(){
        var res1 = yield fromNode(function(cb){
            fs.readFile('1.txt',cb);
        })
        var res2 = yield fromNode(function(cb){
            fs.readFile('2.txt',cb);
        })
        console.log(res1.toString());
        console.log(res2.toString());
    })
}

nodeTest(coTest);
