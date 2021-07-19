// buffer创建---- buffer实际是二进制数据

/*
let buffer = Buffer.alloc(10);  //创建指定大小的缓存区
console.log(buffer)
*/


/*
let buffer1 = Buffer.from([0xe5,0xe5,0xea6]);
console.log(buffer1);
*/

let buffer2 = Buffer.from([0xe5,0xa4,0xa7,0xe5,0xae,0xb6,0xe5,0xa5,0xbd])   //二进制”大家好“的编码
// 把二进制转换为中文
let { StringDecoder } = require('string_decoder');
let decoder = new StringDecoder();
let res1 = decoder.write(buffer2) 
console.log(res1)



