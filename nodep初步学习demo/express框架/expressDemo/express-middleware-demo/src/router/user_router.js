const express = require('express');

const router = express.Router();

//方法一、 router.use 使用中间件
/*
router.use(function(req,res,next){
	console.log('log from router')
	next()
})
router.get('/demo',(req,res)=>{
	res.json({
		message:'user demo'
	})
})*/



//方法二、 路由内部使用中间件
function valid_params_middleware(req,res,next){
	let {name,password} = req.query;
	req.formdata = {name,password}
	if(!name || !password){
		res.json({
			message:'参数不缺少'
		})
	}else{
		next()
	}
}


router.get('/demo',[valid_params_middleware],(req,res)=>{
	let {formdata} = req;
	res.json({
		formdata,
		message:'from user demo'
	})
})


module.exports = router
