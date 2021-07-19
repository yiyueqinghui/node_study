let newsData = require("./data/data.json");
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"root",
    database: 'nodemysql'
}) 

async function insertData(){
    for(let i=0;i<newsData.length;i++){
      let title = newsData[i].title;
      let content = newsData[i].content;
      let addTime = newsData[i].addTime;
      let country = newsData[i].country;
      let type = newsData[i].type;
      let imgUrl = newsData[i].imgUrl;
        console.log(newsData[i]);
      await connection.promise().query("INSERT INTO news (title,content,`addTime`,country,type,imgUrl) VALUES (?,?,?,?,?,?)",[title,content,addTime,country,type,imgUrl]);
    }
}

insertData();