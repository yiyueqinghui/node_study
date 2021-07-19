// mvc  --> model  view  controller:控制器; 
const Koa = require("koa");
const static = require("koa-static");
const views = require("koa-views");
const router = require("./router");   //引入router.js
const koaBody = require("koa-body");   //接收post参数、上传的文件
let app = new Koa();

app.use(static(__dirname + "/static"));
app.use(views(__dirname + "/views", {
    extension: "pug"
}))

app.use(koaBody({
    multipart:true //允许上传文件
}))

router(app);   //加载路由
app.listen(8989);