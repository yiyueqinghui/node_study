console.log(process.env)
if(process.env.dev){
	console.log('我是开发环境')
}else{
	console.log('我是生产环境')
}

console.log(__dirname)
