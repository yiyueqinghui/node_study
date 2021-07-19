// 新闻列表的控制器 ；
const newModel = require("../../service/news")
module.exports = {
    async showIndex(ctx){
        // console.log(ctx.query.p)
        // ctx.body = "新闻列表的主页"
        // ctx.status = 
      let newsData =  await newModel.getData(ctx);
      await ctx.render("news/index.pug",{
            ...newsData 
      });
    },
   async showDetail(ctx){
        // ctx.query.id || 1;
        // ctx.body = "新闻列表详细页面"
       let detailData = await newModel.getDetail(ctx.query.id);
       console.log(detailData)
       await ctx.render("news/detail.pug",{
           detailData
       });
    }
}