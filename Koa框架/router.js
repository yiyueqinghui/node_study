// 主路由入口
const newRouter = require("./routers/newsRouter");   // 分别引入路由
const adminRouter = require("./routers/adminRouter");  // 分别引入路由
const Router = require("koa-router");
let router = new Router();
module.exports = function(app){
    router.get("/",ctx=>{      
        ctx.redirect('/news/index');   //重定向
    });
    app.use(newRouter.routes());
    app.use(adminRouter.routes());
    app.use(router.routes());
}