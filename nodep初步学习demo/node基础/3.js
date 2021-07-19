let path = require('path')

//了解上传的文件
console.log(path.dirname('/node/a/b/c'));    // 返回上一级目录
console.log(path.basename('/node/a/b/c'));   // 返回路径的最后一级
console.log(path.extname('/node/a/b/c/index.html'));  //返回指定路径文件的扩展名
console.log(path.resolve(__dirname,'index.html'))   //返回绝对路径，即将__dirname所获取的路径与后者相拼

//至于http模块、fs模块会在异步请求中涉及到，这里就不写demo了