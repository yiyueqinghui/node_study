## npm 常见命令
  - npm init     -------- 创建package.json
  
  - npm install 包名   --------- 安装包,默认加save
  - npm install 包名@版本号   --------- 安装指定版本
  - npm install 包名 --save (简写：npm i 包名 -S) -------- 默认加save,写入dependencies(运行依赖)，比如jquery
  - npm install 包名 --save-dev(简写：npm i 包名 -D) -------- 写入devDependencies(开发依赖)，比如sass,less等
  - npm install 包名 -g  --------- 全局安装，就会安装到npm root -g所显示的全局目录下
  - npm view 包名 versions  ------- 查看npm服务器上所有该包的版本信息

  - npm uninstall 包名 ------- 删除包