let http = require('http')
let fs = require('fs')

http.createServer((request,response)=>{
    console.log(request.url);   // 表示访问的地址
	fs.readFile(`./${request.url}`,(err,data)=>{
		if(err){
			console.log(err)
			response.writeHead(404)
			response.end('404 not found')
		}else{
			response.writeHead(200)
			response.end(data)
		}
	})
}).listen(88)
