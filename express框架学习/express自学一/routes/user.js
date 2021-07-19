const express = require('express')
const mysql = require('mysql')
const router = express.Router()    //router与app定义api方法是一样的

//保存图片
const path = require('path');
const fs = require('fs');
router.post('/upload',function(req, res){
  console.log(req.host)	
  console.log(req.files)	
  if(req.files.length>0){
  	  const filename = req.files[0].path + path.parse(req.files[0].originalname).ext
	  console.log(filename);
	  //文件重命名并保存到服务端
	  fs.rename(req.files[0].path, filename, function(err){
	    if(err){
	     res.send(err)
	    }else{
	     res.json({
	     	msg:"上传成功！",
	     	src:filename.replace(/\\/g,'/')
	     })
	    }
	  })
  }else{
  	res.json({
  	   msg:'上传的文件不能为空！'
  	})
  }
 
})




//配制数据库信息
const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"nodemysql"
})
//连接数据库
db.connect(err=>{
	if(err) throw err;
	console.log('mysql 连接成功！')
})
//创建数据库
router.get('/createdb',(req,res)=>{
	let sql = "create database nodemysql";
	db.query(sql,(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.send('Database create success...')
		}
	})
})

//创建表
router.get('/create/user/table',(req,res)=>{
	let sql = "CREATE TABLE user(id int AUTO_INCREMENT,name VARCHAR(255),password VARCHAR(255),PRIMARY KEY(ID))";
	db.query(sql,(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.send("user表创建成功！")
		}
	})
})



//get方法     req.query获取请求参数
//2、查询user表中的所有数据
router.get('/list',(req,res)=>{
//	const query = req.query; 
	let sql = "SELECT * FROM USER";
	db.query(sql,(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.json({
				message:"用户列表",
				user:result
			});
		}
	})
//	res.json(query)
})


// 3、mysql查询指定内容
router.post('/login',(req,res)=>{
   console.log(req.body)
   let params = req.body;
   
   //注意：要查询的name是字符串 所以写sql语句的时候需要使用引号 引起来 ,如果是数值就不用了
   let sql = `SELECT * FROM user WHERE name = ? AND password = ?`;     
   db.query(sql,[params.name,params.password],(err,result)=>{
   	    if(err){
			console.log('无此用户！')
		}else{
			res.json({
				message:"查询到的用户如下",
				user:result
			});
		}
   })
// res.json(req.body)
	
})


//1、mysql插入内容
router.post('/register',(req,res)=>{
	//req.body 是正常传递的数据，req.files则是上传的文件数据
	let params = req.body;
	let sql = "INSERT INTO user SET ?";     //写个问号 防止sql注入 会在执行时把post传进sql语句 替换问号
	db.query(sql,params,(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.json({
				message:"注册成功！",
				user:req.body
			})
		}
	})
	
	
})


//4、更新数据
router.post('/update',(req,res)=>{
	let params = req.body;
	console.log(params);
	let sql = `UPDATE user SET password = ? WHERE id = ?`;
	db.query(sql,[params.password,params.id],(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.json({
				message:"修改密码成功！",
			})
		}
	})
})


//5、删除数据
router.post('/delete',(req,res)=>{
	let params = req.body;
	let sql = `DELETE FROM user WHERE id = ?`;
	db.query(sql,[params.id],(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.json({
				message:"用户删除成功!"
			})
		}
	})
})

router.post('/test',(req,res)=>{
	console.log(req.body);
	res.json({
		params:req.body
	})
})


module.exports = router;
