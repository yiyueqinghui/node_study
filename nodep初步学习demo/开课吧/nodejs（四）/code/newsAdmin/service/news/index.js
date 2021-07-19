const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodemysql',
    password:"root"
})

module.exports = {
    async getData(){
        let [data] = await connection.promise().query("SELECT * FROM news");
        // console.log(data);
        return data;
    },
    async getDetail(id){
        let [data] = await connection.promise().query("SELECT * FROM news WHERE id=?",[id]);
        // console.log(data);
        data = data.length>=1 ? data[0]:{};
        return data;
    }
}