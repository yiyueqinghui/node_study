const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mime = require("./data/mime.json");
let data = require("./data/data.json");
// [{...},{...},{...}]
let server = http.createServer((req, res) => {
    let pathObj = url.parse(req.url, true);
    let pathname = pathObj.pathname;
    if (pathname === "/" || pathname === "/index") {
        // 主页；
        res.writeHead(200, { "content-type": "text/html;charset=utf8" });
        let indexData = fs.readFileSync("./views/index.html");
        // indexData --->buffer-->string
        // fs.readFile("./views/index.html",(err,data)=>{
        //     console.log(data)
        // })
        // 数据驱动；数据优先；
        let str = "";
        for (let i = 0; i < data.length; i++) {
            str += `<li class="news">
                    <a href="javascript:;">
                        <img src="./img/img.png" alt="">
                    </a>
                    <div>
                        <h3>
                            <a href="javascript:;">${data[i].title}</a>
                        </h3>
                        <div class="info">
                            <span class="tips"><span>${data[i].country}</span></span>
                            <!-- <span class="line"></span> -->
                            <span class="time">| &nbsp;&nbsp;${data[i].addTime}</span>
                        </div>
                    </div>
                </li>`;
        }
        let reg = /(<ul class="news-list">)[\d\D]+(<\/ul>)/g;
        let showData = indexData.toString().replace(reg,str);
        res.end(showData);
    } else if (pathname === "/detail") {
        res.writeHead(200, { "content-type": "text/html;charset=utf8" });
        let detailData = fs.readFileSync("./views/detail.html");
        res.end(detailData);
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