const fs =require('fs')

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


// promise方法异步
// 执行函数，传参
// readFile('data/01.txt').then(res=>{
//     console.log(res.toString() + 1)
//     // return一个新的执行函数--------没搞明白
//     return readFile('data/02.txt')
// }).then(res=>{
//     console.log(res.toString())
//     return readFile('data/03.txt')
// }).then(res=>{
//     console.log(res.toString())
// })


 

// async await 异步
// async function fn(){
//     let f1 = await readFile('data/01.txt')
//     console.log(f1.toString() + 1)
//     let f2 = await readFile('data/02.txt')
//     console.log(f2.toString())
//     let f3 = await readFile('data/04.txt')
//     console.log(f3.toString())
// }

async function fn(){
    let [a,b,c] = await Promise.all([
        readFile('data/01.txt'),
        readFile('data/02.txt'),
        readFile('data/03.txt'),
    ])
    console.log((a+b+c).toString())
}
fn()







// async functon fn(){}     表示这个函数里有异步任务
// await                    表示后面结果需要等待
// await 后面可以使promise对象，也可以是数字、字符串、布尔值
// async 函数返回是一个promise对象
// 只要 await 语句后面的promise状态变成reject，那么async函数会中断执行


