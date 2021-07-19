let obj = {
    name:"张三",
    fn:function(){
        console.log(1111);
    },
    test:undefined
}
let res = JSON.parse( JSON.stringify(obj));
console.log(res);