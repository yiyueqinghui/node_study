/*
  模块: 
  1、每个模块都有一个独立的作用域，这样就能防止污染全局
  2、每个模块导出的内容可供引入地使用，未导出的无法在其它文件中使用
*/

console.log('我是模块a');

// name未导出，无法在其它地方使用
let name = 'Tony';   

// 下方两个已导出，可在其引入地调用
let a = 10;
class Person {
    constructor(){
        this.name = '张三'
    }
    say(){
       console.log('我是Person类')
    }
}

// 导出
/* 导出方法一*/
module.exports = {      // 按需导出在模块外需要使用方法、变量
    a,
    Person
}


/* 导出方法二*/
// exports.a = a;
// exports.Person = Person;