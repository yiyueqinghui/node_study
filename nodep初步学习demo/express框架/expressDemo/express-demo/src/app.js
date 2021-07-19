const express = require('express')

// 是一个 express的实例
const app = express();

app.get('/name/:age',(req,res)=>{
	let {age} = req.params;
	res.json({
		name:'tom',
		age
	})
})

app.post('/name',(req,res)=>{
	res.send('tom post')
})

app.listen(3000,()=>{
	console.log('server 启动成功！')
})
