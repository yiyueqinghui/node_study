## 数据库的初始化
1、创建一个数据库
2、使用`sequelize cli` 初始化 项目的 数据库配制信息
      执行`npx sequelize init`
3、 生成模型文件
   3.1、migrate文件
   3.2、model 文件
     执行`npx sequelize model:generate --name Todo --attributes name:string,deadline:date,content:string`
     
4、持久化，模型对应的【数据库表】
    执行 `npx sequelize db:migrate`   
    
    
## 项目的发布与管理
pm2  
启动命令/运维命令/运维文档
1、pm2 start ecosystem.config.js
2、pm2 log
3、pm2 restart ecosystem.config.js
      

## 课程回顾
1、技术栈
   1.1、node--->http
   1.2、web框架，express、koa
   1.3、参数校验
   1.4、mysql的使用，了解
   1.5、数据库的使用---> ORM()、sequelize 使用
   
2、技术的关键点
   web-->webserver-->router-->hander-->orm-->db