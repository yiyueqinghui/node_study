const express = require('express')
const userRouter = require('./router/user_router.js')
const app = express();

//app级别的中间件
/*
function log_middleware(req,res,next){
	console.log('请求来了')
	next()
}
app.use(log_middleware)
*/


//路由级别的中间件,详情见user_router.js
app.use('/user',userRouter)



//中间件完整的结构
//1、是一个函数
//2、err、req、res、next----->function
/*
function valid_name_middleware(req,res,next){
	let {name} = req.query;
	if(!name || !name.length){
		res.json({
			message:"缺少name参数"
		})
	}else{
		next()
	}
}
//首先
app.all('*',valid_name_middleware)

//其次
app.get("/test",(req,res)=>{
	res.json({
		message:"test"
	})
})
*/

app.listen(3000,()=>{
	console.log("server 启动成功了")
})
