const http = require('http');

const server = http.createServer((req,res)=>{
	res.end('hello world!yiyueqinghui!')
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server 启动成功!')
})


//配制nodemon  （用于当文件改变时，自动重启服务）
// 1、npm install nodemon -D
// 2、修改package.json中的启动命令 
// 3、 通过增加nodemon.json 配置  指定的要监听的文件