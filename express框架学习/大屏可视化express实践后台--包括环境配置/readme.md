## 启动项目时，需要全局安装pm2  nodemon
`
  npm i pm2 -g         // 生产环境启动项目   
  npm i nodemon -g     // 开发环境启动项目
`

## 创建项目时,运行如下命令，自动创建配置文件ecosystem.config.js，在其内可区分不同环境下相应配置
`
  pm2 init simple
`

## 启动项目方式
 - 方式一：node方式---------通过node [入口js文件路径]   (关闭窗口后，服务关闭)
 - 方式二：npm方式 ----------通过npm init 生成 package.json,在其内的scripts中配置启动命令， 
                                                     比如 npm start（每次文件更新都需要重新启动）(关闭窗口后，服务关闭)
 - 方式三：nodemon方式 --------运行npm i nodemon -D ,安装nodemon,之后把通过npm启动的方式修改为通过nodemon启动，
                                                     即可监听文件变化，自动重启项目。(关闭窗口后，服务关闭)
 - 方式四：pm2方式启动
   - 1、 pm2启动方式一(不区分环境)：  
        pm2 start [入口js文件路径] --watch      atch可监听文件变化，自动重启项目。 
   - 2、pm2启动方式二(区分环境,根据不同环境进行启动)：
               
               第一步，通过pm2 init生成的配置文件ecosystem.config.js ,配置不同环境
               
        `
          module.exports = {
			  apps : [
			      {
			        name: "myapp",
			        script: "./app.js",
			        watch: true,
			        env: {
			            "NODE_ENV": "development"
			        },
			        env_prod: {
			            "NODE_ENV": "production",
			        },
			        env_test: {
			            "NODE_ENV": "test",
			        }
			      }
			  ]
		  }
        
        `
               注意：env是默认的环境，env_后面的是启动项目时指定的环境名
        
              第二步，启动项目
              
        `pm2 start [配置文件(ecosystem.config.js)] --env 环境名`
        
                 之后在项目中，可通过process.env获取到不同环境下相应的配置信息