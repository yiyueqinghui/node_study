const Router = require("koa-router");
const newController = require("../controller/news");
let router = new Router({
    prefix:"/news"   // 路径前缀
});

router.get("/index",newController.showIndex);
router.get("/showDetail",newController.showDetail);
router.get("*",ctx=>{
    ctx.body = "新闻列表主页";
})
module.exports = router;