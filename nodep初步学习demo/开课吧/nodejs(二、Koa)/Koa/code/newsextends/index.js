const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mime = require("./data/mime.json");
let data = require("./data/data.json");
const cheerio = require("cheerio");
// cheerio--->node jq;
// [{...},{...},{...}]
let server = http.createServer((req, res) => {
    let pathObj = url.parse(req.url, true);
    let pathname = pathObj.pathname;

    if (pathname === "/" || pathname === "/index") {
        // 主页；
        // 每页显示多少条？
        let perPage = 5;
        console.log(pathObj.query.p);
        let p = pathObj.query.p || 1  //当前页码；

        // 获取对应的数据
        let newData = JSON.parse(JSON.stringify(data)).splice((p - 1) * perPage, perPage);
        // console.log(newData);
        // 数据总条数； 每页显示条数  ； 总页码；
        let totalPage = Math.ceil(data.length / perPage);
        // console.log(totalPage);
        res.writeHead(200, { "content-type": "text/html;charset=utf8" });
        let indexData = fs.readFileSync("./views/index.html");
        let $ = cheerio.load(indexData);
        // indexData --->buffer-->string
        // fs.readFile("./views/index.html",(err,data)=>{
        //     console.log(data)
        // })
        // 数据驱动；数据优先；
        let str = "";
        for (let i = 0; i < newData.length; i++) {
            str += `<li class="news">
                    <a href="javascript:;">
                        <img src="./img/img.png" alt="">
                    </a>
                    <div>
                        <h3>
                            <a href="/detail?id=${newData[i].id}">${newData[i].title}</a>
                        </h3>
                        <div class="info">
                            <span class="tips"><span>${newData[i].country}</span></span>
                            <!-- <span class="line"></span> -->
                            <span class="time">| &nbsp;&nbsp;${newData[i].addTime}</span>
                        </div>
                    </div>
                </li>`;
        }
        // let reg = /(<ul class="news-list">)[\d\D]+(<\/ul>)/g;
        // let showData = indexData.toString().replace(reg,str);
        // 组装页码视图；
        let pageHtml = `<a href="javascript:;" class="prev">⌜</a>`;
        for (let i = 1; i <= totalPage; i++) {
            // 跳转本页面  代参
            pageHtml += `<a href="/?p=${i}">${i}</a>`;
        }
        pageHtml += `<a href="javascript:;" class="next">⌝</a>`;
        $(".news-list").html(str);
        // 替换页码视图
        $(".pagination").html(pageHtml);
        res.end($.html());
    } else if (pathname === "/detail") {
        res.writeHead(200, { "content-type": "text/html;charset=utf8" });
        // 接收id
        let id = pathObj.query.id || 1;
        // 通过id查询详细数据； --数据库查询；select * from dataName WHERE id=id;
        let newDetailData = data.filter(v => v.id == id)[0];
        console.log(newDetailData);
        let detailData = fs.readFileSync("./views/detail.html");
        let $ = cheerio.load(detailData);
        let detailHtml = `<h1 class="title">${newDetailData.title}</h1>
                        <div class="article-info"> 韩国 时间：${newDetailData.addTime}</div>
                        <p class="content">
                        ${newDetailData.content}
                        </p>`;
        $(".text").html(detailHtml);
        res.end($.html());
    } else {
        if (pathname !== "/favicon.ico") {
            // 1.设置对应的头部 2.读取资源文件写入到页面；
            let ext = path.extname(pathname);
            //   console.log(mime[ext]);
            res.setHeader("content-type", mime[ext]);
            let resData = fs.readFileSync("views" + pathname);
            res.end(resData);
        }
    }
})
server.listen(8887);