//  中间件:处理请求的，本质就是个函数
//  在Express 中，对中间件有几种分类
//  不关心请求路径和请求方法的中间件
//  也就是说任何请求都会进入这个中间件
//  中间件本身是一个方法，该方法接受三个参数
//  request 请求对象
//  respond 响应对象
//  next    下一个中间件对象
//  一个请求进入一个中间件之后，如果不调用next()方法则会停留在当前中间件中
//  next是一个方法用来调用下一个中间件
//  调用next方法也是需要匹配的
//  当请求进来也是从第一个中间件开始一个一个的匹配的
//   如果匹配就进来了，不匹配就继续找下一个中间件匹配
//   如果没有调用next方法代码会停在当前中间件中
//   调用了next方法则继续匹配后面的第一个匹配的中间件
//   除了以上中间件之外，还有一种最常用的
//   严格匹配请求方法和请求路径的中间件
//   app.get
//   app. post
//   同一个请求所使用的的request和respond对象是一样的
    let express=require("express");
    let app=express();
    app.use(function (request,respond,next) {
            console.log("请求进来了");
            next();
    });
    app.post("/",function (request,respond) {
        respond.setHeader("Content-Type","text/plain;charset=UTF-8");
        respond.send("收到请求......");
    });

    app.listen("8080",function () {
        console.log("running........");
    });