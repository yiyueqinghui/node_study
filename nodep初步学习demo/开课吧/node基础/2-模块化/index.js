/*
  node中的模块可分为三大类：
  1、node自定义模块，比如http
  2、第三方模块，一般安装在node_modules中
  3、自定义模块，放入项目自定义的文件夹内  

  模块：
  1、每个模块有一个变量空间，从而防止变量污染
  2、 node 自带的common.js 规范(即require)
*/

console.log('我是index.js')

/*方式一： 通过文件方法引入模块 */
 let Ma = require("./Ma.js");       // 会执行模块a,同时返回模块a导出的对象
console.log(Ma.a);
let person = new Ma.Person();
console.log(person)
person.say();

//console.log(name,Ma.name)   //无法访问到模块a中未导出的数据name


/*方式二： 通过目录方法引入模块，默认是目录下的index.js */
require("./module/home")


/*方式三： 引入node_modules里的模块  
  当直接引入node_modules下的模块时，
  1、如果没有package.json文件，则默认入口是index.js
  2、如果自定义了package.json文件，则会按照package.json中自定义的信息进行模块信息的修改，比如入口文件等  
  3、这种引入第三方模块的方式，不受目录路径的限制，当前目录没有，会去上级目录寻找，直到寻找到根目录，即npm root -g显示的目录
*/
let mytest = require("mytest");   //直接引入,注意不会加路径，会直接去node_modules中查找相应文件名的模块，同时执行该模块下的index.js
console.log(mytest);
mytest.say()