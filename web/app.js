    // 1.安装 npm install express --save
    // 2.导包
    let express=require("express");
    // 3.创建你的服务器应用程序
    let app=express();
    //当服务器收到get请求 / 的时候执行回调处理函数
    app.get("/",function (request,respond) {
        //在Express中可以是用request.query查询get后面的字符串参数
        console.log(request.query);
        respond.send("收到请求了!");
    });
    app.get("/about",function (request,respond) {
        respond.send("about");
    });
    //  公开目录 使用use()方法
    /*
        第一个参数是请求路径，
        第二个参数是你的资源所在的目录
     */
    app.use("/demo/",express.static("./public/"));
    //相当于server.listen();
    app.listen(8080,function () {
        console.log("服务器启动中.......");
    });

    //模板引擎在 Express中也是一个API的事
