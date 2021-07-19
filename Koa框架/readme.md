## 文件目录结构
  - controller   
    接口返回操作，如果需要去数据库读取数据，则需要引入service中相应模块

  - routes
    各个模块的路由配制，指定路由地址，至于返回内容则写入controller文件夹中

  - service
    对数据库的操作

  - static
    静态资源，包括css、js、图片等

  - views
    页面，这里采用的是pug模版，即通过`https://html-to-pug.com/` 把html转成pug模版，再读取模版，前端程现出来

  - app.js
    服务入口，指定服务ip、port,以及启动相应的静态资源服务

  - router.js
    路由入口---各个模块的路由在routes文件夹中