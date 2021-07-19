// 文件操作
const fs = require('fs');

// 增删改查
// 1、文件操作   2、目录操作


// 1、文件操作 ------ 所有文件操作，没有加Sync的都是异步，否则就是同步
// 写入
/*
fs.writeFile('1.text',"hello world",{
    flag:"a"   // a:追加写入   w:写入,会覆盖原先内容   r:读写
} ,function(err){
   if(err){
       return console.log(err); 
   }
   console.log("写入成功!！")
})
*/

// 读取
/*
// 异步读取
fs.readFile("1.text","utf8",(err,data)=>{
    if(err){
        return console.log(err);
    }
    console.log(data); 
})

//同步读取
let data = fs.readFileSync("1.text");   // 同步读取
console.log(data.toString())

*/

// 修改：(修改文件名)
/*
fs.rename("2-1.text","2.text",err=>{
    if(err){
        return console.log(err);
    }
    console.log("修改成功！"); 
})
*/

// 删除
/*
fs.unlink("2.text",(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("删除成功！"); 
})
*/


// 复制
/*
fs.copyFile("index.html","./copy/my-index.html",err=>{
    if(err){
        return console.log(err);
    } 
    console.log("复制成功！");
})  
*/


// 2、目录操作 ------ 所有目录操作，没有加Sync的都是异步，否则就是同步

// 创建目录
/*
fs.mkdir('page',err=>{
    if(err){
        return console.log(err);
    } 
    console.log("创建成功！")
})
*/

// 修改目录
/*
fs.rename('page','page22',err=>{
    if(err){
        return console.log(err);
    } 
    console.log("修改成功！")
})
*/

// 读取目录
/*
fs.readdir('copy',(err,data)=>{
    if(err){
        return console.log(err); 
    } 
    console.log("读取成功！",data)
})
*/


//删除空目录、空文件夹
/*
fs.rmdir('test',(err)=>{  
    if(err){
        return console.log(err); 
    } 
    console.log("删除目录成功！")
})
*/


//删除非空目录、非空文件夹
// 先把目录里的文件删除，---》删除空目录
function removeDir(path){
    let data = fs.readdirSync(path);  

    for(let i=0;i<data.length;i++){
        //是文件或目录-----》文件 ？直接删除 ： 目录继续查找
        let url = path + "/" + data[i];
        let stat = fs.statSync(url);
        if(stat.isDirectory()){
            // 目录继续查找
            removeDir(url)  
        }else{
            // 文件删除
            fs.unlinkSync(url)
        }

    }

    fs.rmdirSync(path);  // 删除空目录
}

// removeDir("22");




//判断文件或目录是否存在
/*
fs.exists("copy",exists=>{
    console.log(exists)
})
*/

// 获取文件或目录的详细信息
/*
fs.stat("index.html",(err,stat)=>{
    if(err){
        return console.log(err); 
    } 
    console.log("文件信息！",stat )

    // 判断文件是否是文件
    let res = stat.isFile();
    console.log(res+"文件");
    // 判断文件是否是目录
    let dir = stat.isDirectory();
    console.log(dir+"目录");
})
*/
