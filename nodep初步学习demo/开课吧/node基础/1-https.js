// 创建一个服务
const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('hello world !!!!!');
    res.end()
})

server.listen(3000)

// 启动方式：
/*
 方式一：
 通常情况下，通过node start启动，但这种启动方式，一旦后台变动，则需要重新手动启动
*/

/*
 方式二:
 通过全局安装nodemon, ----- npm i -g nodemon (可通过nodemon -v 判断是否已经安装过nodemon )
 通过nodemon启动，可以实现文件变动后，自动重新编译，无需手动启动 
*/