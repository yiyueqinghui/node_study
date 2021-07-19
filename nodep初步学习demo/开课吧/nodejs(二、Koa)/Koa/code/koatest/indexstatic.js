const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const views = require("koa-views");
let app = new Koa();
let router = new Router();
app.use(static(__dirname+"/static"));   // static 自动读取该目录下的数据
app.use(views(__dirname+"/views"),{
    extension:"pug"
})
// router.get("/",ctx=>{
//     ctx.body = "hello";
// })
router.get("/home",async ctx=>{
    // ctx.body = "hello";
   await ctx.render("./index");
})

app.use(router.routes());
app.listen(8887);

// 作业：用koa相关实现 新闻列表及详细；

