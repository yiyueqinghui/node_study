// stream 流
const fs = require('fs');

// 整体读取文件
/*
let res = fs.readFileSync('1.txt');
console.log('二进制',res);
console.log('二进制转为中文',res.toString());
*/


// 分块文件，逐步读取
/*
let rs = fs.createReadStream("1.txt");
let num = 0;
let str = '';
rs.on("data",chunk=>{
    num ++ ;
    str += chunk;
    console.log(num);
    // console.log( chunk.toString())  
})
rs.on('end',()=>{
    console.log('文件读取完毕！');
    console.log(str);
    console.log(num);
    
})
*/

// 读取1.txt后重写入2.txt文件
let rs1 = fs.createReadStream("1.txt");
let ws = fs.createWriteStream("2.txt");
rs1.pipe(ws); 


