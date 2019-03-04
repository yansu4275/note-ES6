const fs  = require('fs')

// 定义函数，参数为文件路径
const readFile = function (fileName) {
    // return一个promise
    return new Promise((resolve, reject)=>{
        // 读取文件
        fs.readFile(fileName, (err, data)=>{
            // 成功，返回文件内容
            resolve(data)
            // 失败，返回err
            if(err) reject(err)
        })
    })
}

// 执行函数，传参
readFile('data/01.txt').then(res=>{
    console.log(res.toString())
    // return一个新的执行函数--------没搞明白
    return readFile('data/02.txt')
}).then(res=>{
    console.log(res.toString())
    return readFile('data/03.txt')
}).then(res=>{
    console.log(res.toString())
})