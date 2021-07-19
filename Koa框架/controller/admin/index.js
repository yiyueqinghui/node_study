const adminModel = require("../../service/admin");
//后端管理页面的controller
module.exports = {
    async showIndex(ctx) {
        await ctx.render("admin/index.pug");
    },
    async showAddPage(ctx) {
        await ctx.render("admin/addNewsPage.pug")
    },
    async showNewsList(ctx){
        await ctx.render("admin/newsListPage.pug")
    },
    async addNewsData(ctx){
        // console.log("提交了")
        // 接收post参数；body-parser
    //    console.log( ctx.request.body );
    //    console.log(ctx.request.files.img);
        let res = await adminModel.addNewsData(ctx.request);
        let info;
        console.log(res);
        if(res[0].affectedRows>0){
            info = {
                status:1,
                message:"添加成功"
            }
        }else{
            info = {
                status:1,
                message:"添加失败"
            }
        }
        ctx.body = info;
    }

}