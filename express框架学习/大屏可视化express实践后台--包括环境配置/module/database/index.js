const mysql = require('mysql')

console.log("环境变量",process.env.NODE_ENV)
const environment = process.env.NODE_ENV;
let config = {}
switch (environment) {
    case 'test':
        console.log('测试环境')
        config = {
            host:"",
			user:"",
			password:"",
	        database:""
        }
        break;
    case 'production':
        console.log('生产环境')
        config = {
        	host:"",
		    port:"",
	        user:"",
	        password:"",
	        database:""
        }
        break;
    case 'development':
        console.log('开发环境')
        config = {
        	host:"localhost",
	        user:"root",
	        password:"root",
	        database:"nodemysql"
        }
        break;
    // 本地
    default:
        config = {
            host:"localhost",
	        user:"root",
	        password:"root",
	        database:"nodemysql"
        }
}

//配制数据库信息
console.log(config)
const db = mysql.createConnection(config);

//连接数据库
db.connect(err=>{ 
	if(err){
	   console.log("连接失败！") 
	   throw err;
    }		
	console.log('mysql 连接成功！')
})


module.exports = {
	db	
}
