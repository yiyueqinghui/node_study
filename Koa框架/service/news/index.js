const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodemysql',
    password:"root"
})

module.exports = {
    async getData(ctx){
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
        return {
            newsData:newData,
            totalPage,
            p
        }

    },
    async getDetail(id){
        let [data] = await connection.promise().query("SELECT * FROM news WHERE id=?",[id]);
        // console.log(data);
        data = data.length>=1 ? data[0]:{};
        return data;
    }
}