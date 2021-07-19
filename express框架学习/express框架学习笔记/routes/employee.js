const express = require('express')
const mysql = require('mysql')
const router = express.Router()    //router与app定义api方法是一样的


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



router.post('/add',(req,res)=>{
	//req.body 是正常传递的数据，req.files则是上传的文件数据
	let params = req.body;
	console.log(params)
	params.date = new Date();
	let sql = "INSERT INTO employee SET ?";     //写个问号 防止sql注入 会在执行时把post传进sql语句 替换问号
	db.query(sql,params,(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
			res.json({
				message:"新增成功！",
				user:req.body
			})
		}
	})
	
	
})

module.exports = router;