    //引入模块
    let express=require("express");
    let fs=require("fs");
    let app=express();//创建服务器

    app.listen("8080",function () {
        console.log("服务器启动中......");
    });
    app.get("/",function (request,respond) {
        respond.send("收到了请求.....");
    });
    // app.use("/public/",express.static("../view/"));
    //当省略第一个参数时,则默认为/的请求路径进行访问
    app.use(express.static("../view/"));

    /*
        我们这里可以使用一个第三方命令行工具:
        nodemon来帮我们解袂频繁修改代码重启服务器问题。
        nodemon是一-个基于Node.js开发的一个第三方命令行工具，
        我们使用的时候需要独立安装:
        npm install -- global nodemon
     */