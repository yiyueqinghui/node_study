const mysql = require("mysql2");
const fs = require("fs");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodemysql',
    password:"root"
})

module.exports = {
   async addNewsData(request){
        // 文件如何存数据库；
        // 把临时路径进行转存；
        if(!fs.existsSync("static/uploads/")){
            fs.mkdirSync("static/uploads/");
        }
      fs.writeFileSync("static/uploads/"+request.files.img.name,fs.readFileSync(request.files.img.path));
      let { title , content ,type } = request.body;
      let imgUrl = "/uploads/"+request.files.img.name
   let res = await connection.promise().query("INSERT INTO news (title,content,type,imgUrl) VALUES (?,?,?,?)",[title , content ,type,imgUrl]);
//    console.log(res);
        return res;
    }
}