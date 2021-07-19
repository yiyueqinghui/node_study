const Koa = require("koa");
const static = require("koa-static");
const views = require("koa-views");
const Router = require("koa-router");
const mysql = require('mysql2');
let app = new Koa();
let router = new Router();
app.use(static(__dirname + "/static"));
app.use(views(__dirname + "/views", {
    extension: "pug"
}))
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"root",
    database: 'nodemysql',
    charset:"utf8"
  });

// 获取
router.get("/",async ctx=>{
    let sql = "SELECT username,age,hobby FROM users WHERE age>19";
    // connection.query(sql,(err,result)=>{
    //     if(err){
    //      return console.log(err);
    //     }
    //     console.log(result);
    // });
    let mydata;
    try{
        let [rows,fields] = await connection.promise().query(sql);
        // console.log(mydata);
        mydata = rows;
    }catch(e){
        console.log(e);
    }
    ctx.body = mydata;
})

// 新增
router.get("/adduser",async ctx=>{
    let username = ctx.query.username || "无";
    let age = ctx.query.age || 10;
    let hobby = ctx.query.hobby || "篮球";
    let sql = "INSERT INTO users (username,age,hobby) VALUES (?,?,?)";
    let mydata;
    try{
        let [rows,fields] = await connection.promise().query(sql,[username,age,hobby]);
        // console.log(mydata);
        mydata = rows;
    }catch(e){
        console.log(e);
    }
    ctx.body = mydata;
})

// 查询
router.get("/getData",async ctx=>{
    // = > < ;AND 
    // 年龄大于20 且姓王的数据；
    // let sql = "SELECT * FROM users WHERE age>20 AND username LIKE '王%'";
    // 年龄正序排列的数据  : ORDER BY ASC(省略)
    // let sql = "SELECT * FROM users WHERE age>20 ORDER BY age DESC";
    // 别名---关联表查询；
    let sql = "SELECT u.username,p.pname FROM products as p LEFT JOIN users as u ON p.uid=u.id";
    // 限制查询；LIMIT; //分页相关；  LIMIT 跳过几行 取几行数据
    // let sql = 'SELECT * FROM users LIMIT 2,2';
    let mydata;
    try{
        let [rows,fields] = await connection.promise().query(sql);
        console.log(rows);
        mydata = rows;
    }catch(e){
        console.log(e);
    }
    ctx.body = mydata;
})

app.use(router.routes());
app.listen(8887);
// 练习：把新闻列表数据换成mysql版本；1.新闻呈现；2.详细；3.分页；