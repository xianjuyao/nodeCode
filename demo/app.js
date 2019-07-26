    //http模块
    let http=require("http");
    //文件模块
    let fs=require("fs");
    //加载模板引擎
    let template=require("art-template");
    //url模块
    let path=require("url");
    /*
            /pinglun?name=的撒的撒&message=的撒的撒的撒
            对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
            所以你不可能通过去判断完整的url 路径来处理这个请求
            因此我们只需要判断你的请求路径是/pinglun就可以认为是发表评论
     */
    let comments=[
        {name:"洛天依",message:"霜雪千年",dateTime:"2019-7-16"},
        {name:"乐正凌",message:"世末歌者",dateTime:"2019-7-16"},
        {name:"星尘",message:"十二镇魂歌",dateTime:"2019-7-16"},
        {name:"海伊",message:"绮凝盏",dateTime:"2019-7-16"},
        {name:"洛天依",message:"时光里的少年",dateTime:"2019-7-16"},
        {name:"洛天依",message:"心上秋",dateTime:"2019-7-16"}
    ];
    /*
            我们为了方便的统一处理这些静态资源
            所以我们约定将所有的静态资源都存放在public目录中
     */

    http.createServer(function (request,respond) {
        let url=path.parse(request.url).pathname;
        if (url==="/"){
            fs.readFile("views/html/index.html",function (error,data) {
                if (error){
                    respond.setHeader("Content-Type","text/plain;charset=UTF-8");
                    respond.end("读取文件失败....");
                    return;
                }
                respond.setHeader("Content-Type","text/html;charset=UTF-8");
                //页面进行渲染
                let result=template.render(data.toString(),{
                    comments:comments
                });
                respond.end(result);
            });
        }else if (url.indexOf("/public/")===0){

            //统一处理:
            //如果请求路径是以/public/开头的,则认为你要获取public中的某个资源
            //所以我们就可以把请求路径当做文件路径来直接读取
            fs.readFile("."+url,function (error,data) {
                if (error){
                    return respond.end("404 Not Found");
                }
                respond.end(data);
            });
            console.log(url);

        }else if (url==="/post"){
            fs.readFile("views/html/post.html",function (error,data) {
                if (error){
                    return respond.end("404 Not Found");
                }
                respond.end(data);
            });
        }else if (url==="/pinglun"){//处理发表评论请求地址

            let date=new Date();
            let comment=path.parse(request.url,true).query;//将后面的内容转换成对象
            comment.dateTime=date.toLocaleDateString();//获取当前日期并且赋给评论的时间
            comments.unshift(comment);//添加到评论数组中
          /*
            如何通过服务器让客户端重定向:
            1.需要状态码设置为302临时重定向
            2.在响应头中通过Location告诉客户端往哪里重定向
            如果客户端发现服务端收到的响应的状态码是302就会自动去响应头中找Location,
            然后对该地址发起新的请求。
            所以你就能看到客户端自动跳转了
           */
            respond.statusCode=302;
            respond.setHeader("Location","/");
            //注意一定要结束响应，不然客户端会一直等待
            respond.end();
        } else{
            //其他的都处理成404
            fs.readFile("views/html/404.html",function (error,data) {
                if (error){
                    respond.setHeader("Content-Type","text/plain;charset=UTF-8");
                   return respond.end("404 Not Found");
                }
                respond.end(data);
            });
        }
    }).listen(8080,function () {
        console.log("服务器正在启动中....");
    });

    /*

        本项目总结:
        1. / index. html
        2.开放public目录中的静态资源
            当请求/public/xxx的时候，读取响应public 目录中的具体资源
        3. /post post. html
        4. /pinglun
            4.1接收表单提交数据
            4.2存储表单提交的数据
            4.3让表单重定向到/
            statusCode 302
            setHeader   Location
     */

    /*
        art-template遍历语法:
        {{each 遍历项}}
           遍历内容{{$value}}
        {{/each}}
     */
     /*
           重定向
                301:浏览器会记住
                302：浏览器不会记住

      */







