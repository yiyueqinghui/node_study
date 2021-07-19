let http = require('http');
let querystring = require('querystring');

http.createServer((req,res)=>{
	let result = []
	req.on('data',(buffer)=>{    //buffer ，二进制的数据
		console.log(buffer)
		result.push(buffer)
	})
	
	req.on('end',()=>{
		let data = Buffer.concat(result).toString()   //协助处理数据
		console.log(querystring.parse(data.toString()))
	})
	
}).listen(88)