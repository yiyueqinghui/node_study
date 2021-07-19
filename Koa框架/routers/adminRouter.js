const Router = require("koa-router");
const adminController = require("../controller/admin");
let router = new Router({
    prefix:"/admin"
});
router.get("/",ctx=>{
    ctx.redirect('/admin/index')
});
router.get("/index",adminController.showIndex);
router.get("/addNews",adminController.showAddPage);
router.get("/showNewsList",adminController.showNewsList);
router.post("/addNewsData",adminController.addNewsData);
module.exports = router;