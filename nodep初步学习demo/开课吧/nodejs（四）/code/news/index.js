const Koa = require("koa");
const static = require("koa-static");
const views = require("koa-views");
const Router = require("koa-router");
const mysql = require("mysql2");
// const data = require("./data/data.json");
let app = new Koa();
let router = new Router();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"root",
    database: 'nodemysql',
    
})
app.use(static(__dirname + "/static"));
app.use(views(__dirname + "/views", {
    extension: "pug"
}))
router.get("/", ctx => {
    ctx.redirect("/index");
})
router.get("/index", async ctx => {
    let perPage = 5;
    let p = parseInt( ctx.query.p ) || 1  //当前页码；
    // 获取对应的数据
    // let newData = JSON.parse(JSON.stringify(data)).splice((p - 1) * perPage, perPage);
    // console.log(newData);
    let [data] = await connection.promise().query("SELECT * FROM news");
    // 分页获取数据
    let [newData] = await connection.promise().query("SELECT * FROM news LIMIT ?,?",[(p - 1) * perPage,perPage]);
    // console.log(newData)
    // 数据总条数； 每页显示条数  ； 总页码；
    let totalPage = Math.ceil(data.length / perPage);
    await ctx.render("index", {
        newsData:newData,
        totalPage,
        p
    })
})
router.get("/detail", async ctx=>{
    let id = parseInt( ctx.query.id ) || 1;
    // let detailData = data.filter(v=>v.id==id)[0];
    // console.log(detailData);
    let [detailData] =await connection.promise().query("SELECT * FROM news WHERE id=?",[id]);
    // console.log(detailData[0]);
    detailData = detailData[0]; // [{}]
    await ctx.render("detail",{
        detailData
    });
})


app.use(router.routes());
app.listen(8089);