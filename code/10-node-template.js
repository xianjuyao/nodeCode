//art-template  不仅可以在浏览器中使用，也可以在node中使用
/*
       	安装
  		1. npm install art-template
  			该命令在哪执行就会把包下载到哪里，默认下载到node_modules目录中
		2.在需要使用的文件模块中加载art-template
		3.查文档，使用模板引擎的API
*/
		//在node中使用模板引擎
		//使用require方法加载模板引擎
		// 参数中的 art-template 就是你下载的包的名字  npm install art-template <==这个名字
		let template=require("art-template");
        let fs=require("fs");
        let http=require("http");
        let server=http.createServer();
        server.on("request",function (request,respond) {
            if (request.url==="/html"){
                fs.readFile("../view/02-test.html",function (error,data) {
                    if (error){
                       respond.setHeader("Content-Type","text/plain;charset=UTF-8");
                       respond.end("404 Not Found");
                    }
                    let ret = template.render(data.toString(), {
                        name:'Jack',
                        age:18,
                        province: '北京市',
                        hobbies: [
                            '唱',
                            '跳',
                            'rap',
                            '篮球'
                        ],
                        title:"簪花人间"
                    });
                    respond.end(ret);
                });
            }
        });
        server.listen(8080,function () {
            console.log("服务器启动中........");
        });

		// 基于模板名渲染模板
		// template(filename, data);
		// 将模板源代码编译成函数
		// template.compile(source, options);
		// 将模板源代码编译成函数并立刻执行
		// console.log(template.render("hello{{name}}",{
		// 	name:"洛天依"
		// }));

/*
        服务端渲染和客户端渲染的区别
            客户端渲染不利于SEO搜索引擎优化
            服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
 */




