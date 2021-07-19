const Express = require('express')
const bodyParser = require('body-parser')   
const app = new Express();


//post请求参数获取的设置,使用body-parser
//1、针对content-Type:application/json,设置中间件获取参数
app.use(bodyParser.json())
//2、针对content-Type:application/x-www-form-urlencoded  设置中间件------不使用第三方模块处理参数，使用Nodejs内置模块querystring处理
app.use(bodyParser.urlencoded({extended:false}))


// 保存上传的文件 ,步骤如下：
// 1、安装multer   npm i -S multer
const multer = require('multer');
// 2、通过配置multer的dest属性， 将文件储存在项目下的upload文件中
app.use(multer({ dest: './static/upload/' }).any())
// 3、创建路由
//最终在路由中调用接口时，使用fs.rename() 方法来把文件并命名并保存到服务器


//引入各个中间件
const userRouter = require('../routes/user');
app.use(userRouter)

const employeeRouter = require('../routes/employee');
app.use('/employee',employeeRouter)

app.get('/',(req,res)=>{
	res.send('hello world!')
})


// 读取静态资源
app.use(Express.static('static'))

app.listen(3000,()=>{
	console.log('服务已启动成功！')
})
