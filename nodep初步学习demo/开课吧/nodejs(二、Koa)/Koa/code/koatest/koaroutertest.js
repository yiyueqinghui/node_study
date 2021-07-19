// koa 的路由模块；
const Koa = require("koa");
const Router = require("koa-router");
let app = new Koa();
let router = new Router();
router.get("/",async ctx=>{
    console.log("...")
    ctx.redirect('/index');
})
router.get("/index",async ctx=>{
    ctx.body = "主页";
})
router.get("/detail",async ctx=>{
    ctx.body = "详细页";
})
router.get("/getData",ctx=>{
    // ctx.status = 404;
    ctx.body = {
        name:"张三",
        age:20,
        status:1
    }
})

// RESTful 接口设计原则；
// post /get ;
// 错误做法
//localhost:8080/adduser   
//localhost:8080/deleteuser
//localhost:8080/updateuser
//localhost:8080/getuser
// 正确做法；
// localhost:8080/user  //请求方式  get方法  获取
// localhost:8080/user  delete
// localhost:8080/user  put
// localhost:8080/user  post
/*
- 程序或者应用的事物都应该被抽象为资源
- 每个资源对应唯一的URI(uri是统一资源标识符)
- 使用统一接口对资源进行操作
- 对资源的各种操作不会改变资源标识
- 所有操作都是无状态的
*/

app.use(router.routes());
app.listen(8888);


