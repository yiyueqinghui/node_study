let fs = require('fs')

//同步读文件
//fs.readFile('./a.txt',(err,data)=>{
//	if(err){
//		console.log(err)
//	}else{
//		console.log(data)   // Buffer ,二进制文件
//		console.log(data.toString())  //转换为文件内容
//	}
//})


//同步写入文件
//fs.writeFile('./b.txt','月薪两万五',{flag:"a"},(err)=>{    // {flag:"a"}  表示创建并写入，如果已经创建了则添加内容
//	if(err){
//		throw err
//	}
//})



//异步读文件
let data = fs.readFileSync('./a.txt')
console.log(data.toString())


//异步写文件
fs.writeFileSync('./b.txt','月薪三万')     //会覆盖原文件

