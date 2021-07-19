const express = require('express')
const router = express.Router()    //router与app定义api方法是一样的
const path = require('path');
const fs = require('fs');
const { db } = require('../module/database/index.js')   //数据库配置


router.post('/add',(req,res)=>{
	//req.body 是正常传递的数据，req.files则是上传的文件数据
	let params = req.body;
	params.date = new Date();
	let sql = "INSERT INTO page SET ?";     //写个问号 防止sql注入 会在执行时把post传进sql语句 替换问号
	db.query(sql,params,(err,result)=>{
		if(err){
			console.log(err)
		}else{
			res.json({
				message:"新增成功！",
				user:result
			})
		}
	})
})

router.post('/echart/line/option',(req,res)=>{
   let params = req.body;
   console.log(params);
   
   function createRandom(basic = 100){
   	 let data = [];
   	 for(let i = 1;i<=7;i++){
   	 	let randomNum = parseInt(Math.random()*500) + 100; 
   	 	data.push(randomNum)
   	 }
   	 return data;
   }
   
   let option = { 
   	 xAxis:[{
   	 	data:["一","二","三","四","五","六","日"]
   	 }],
   	 series:[
   	    {
   	    	data:createRandom(),
   	    	name:'类型一'
   	    },
   	    {
   	    	data:createRandom(0),
   	    	name:'类型二'
   	    }
   	 
   	 ]
   	  
   };
   res.json({
	message:"查询成功！",
	option:option
   });
		
})


router.post('/echart/pie/option',(req,res)=>{
   let params = req.body;
   console.log(params);
   
   function createRandom(basic = 100){
   	 let data = [];
   	 for(let i = 1;i<=7;i++){
   	 	let randomNum = parseInt(Math.random()*500) + 100; 
   	 	data.push({
   	 		name:i,
   	 		value:randomNum
   	 	})
   	 }
   	 return data;
   }
   
   let option = {
   	 series:[
   	    {
   	    	data:createRandom(),
   	    	name:'类型一'
   	    }
   	 
   	 ]
   	  
   };
   res.json({
	message:"查询成功！",
	option:option
   });
		
})

router.post('/echart/radar/option',(req,res)=>{
   let params = req.body;
   console.log(params);
   
   function createRandom(basic = 100){
   	 let data = [];
   	 for(let i = 1;i<=6;i++){
   	 	let randomNum = parseInt(Math.random()*500) + 100; 
   	 	data.push(randomNum)
   	 }
   	 return data;
   }
   
   let option = {
   	 series:[
   	    {
   	    	value:createRandom(),
   	    	name:'类型一'
   	    },
   	    {
   	    	value:createRandom(),
   	    	name:'类型二'
   	    }
   	 
   	 ],
   	 indicator: [
    { name: '销售1', max: 600},
    { name: '管理1', max: 600},
    { name: '信息技术1', max: 600},
    { name: '客服1', max: 600},
    { name: '研发1', max: 600},
    { name: '市场1', max: 600}
  ]
   	  
   };
   res.json({
	message:"查询成功！",
	option:option
   });
		
})

//funnel
router.post('/echart/funnel/option',(req,res)=>{
   let params = req.body;
   console.log(params);
   
   function createRandom(basic = 100){
   	 let data = [];
   	 for(let i = 1;i<=6;i++){
   	 	data.push({
   	 	  value:parseInt(Math.random()*90) + 10,
   	 	  name:i
   	 	}) 	 		
   	 }
   	 return data;
   }
   
   let option = {
   	 series:createRandom()
   };
   res.json({
	message:"查询成功！",
	option:option
   });
		
})

//funnel
router.post('/echart/funnel/option',(req,res)=>{
   let params = req.body;
   console.log(params);
   
   function createRandom(basic = 100){
   	 let data = [];
   	 for(let i = 1;i<=6;i++){
   	 	data.push({
   	 	  value:parseInt(Math.random()*90) + 10,
   	 	  name:i
   	 	}) 	 		
   	 }
   	 return data;
   }
   
   let option = {
   	 series:createRandom()
   };
   res.json({
	message:"查询成功！",
	option:option
   });
		
})


//文本
router.post('/text/option',(req,res)=>{
	console.log(req.protocol);
   let params = req.body;
   let option = {
   	 text:"<dl><dd>123</dd><dd>456</dd></dl>"
   };
   res.json({
	message:"查询成功！",
	option:option
   });
		
})

//列表
router.post('/list/option',(req,res)=>{
   let params = req.body;
   let list = [];
   let total = parseInt(Math.random()*20);
   for(var i=0;i<total;i++){
   	 list.push({
   	 	name:'Tony'+i,
   	 	speed:parseInt(Math.random()*100),
   	 	date:new Date().getTime()
   	 })
   }
   let dictionary = [
        {
            label:'姓名',
            key:'name',
            width:80
        },
        {
            label:'速度',
            key:'speed',
            width:60
        },
        {
            label:'日期',
            key:'date',
            width:'auto'
        }
    ]
   let option = {
   	 list:list,
   	 dictionary:dictionary
   };
   res.json({
		message:"查询成功！",
		option:option
   });
		
})


//上传图片
router.post('/upload',function(req, res){
//console.log('协议',req.protocol)	
//console.log('ip',req.host)
//console.log('ip+port',req.headers.host)
  if(req.files.length>0){
  	  const filename = req.files[0].path + path.parse(req.files[0].originalname).ext
	  console.log(filename);
	  //文件重命名并保存到服务端
	  fs.rename(req.files[0].path, filename, function(err){
	    if(err){
	     res.send(err)
	    }else{
	     let path = filename.replace(/\\/g,'/');
	     let pathArr = path.split('/');
	     pathArr.shift();
	     let src = req.protocol + "://" + req.headers.host + '/' + pathArr.join('/'); 
	     res.json({
	     	status:true,
	     	msg:"上传成功！",
	     	src: src
	     })
	    }
	  })
  }else{
  	res.json({
  	   msg:'上传的文件不能为空！'
  	})
  }
 
})


router.post('/get/option',(req,res)=>{
   console.log(req.body)
   let params = req.body;
   
   //注意：要查询的name是字符串 所以写sql语句的时候需要使用引号 引起来 ,如果是数值就不用了
   let sql = `SELECT * FROM page WHERE id = ?`;     
   db.query(sql,[params.id],(err,result)=>{
   	    if(err){
			console.log('无此配制！')
		}else{
			let option = {};
			if(Array.isArray(result) && result.length>0 ) option = result[0];
			res.json({
				message:"查询成功！",
				allOptions:option
			});
			
		}
   })	
})

module.exports = router;