	let http=require("http");//加载核心模块
	let fs=require("fs");
	
	let server=http.createServer();//创建服务器
	/*
		一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应。
		没有请求就没有响应。
	 */
	let filePath="G:/js/node/view";
	server.on("request",function(request,respond){//绑定请求事件
		if(request.url!=="/"){	//请求地址不等于 /
		var currentPath=request.url;
		}
		fs.readFile(filePath+currentPath,function (error,data) {
			if(!error){
				respond.setHeader("Content-Type","text/html;charset=UTF-8");
				respond.end(data);
			}else{
				respond.setHeader("Content-Type","text/plain;charset=UTF-8");
				respond.end("请求失败，请重试！");	
			}
		});
	
	
	});
	//绑定端口号，启动服务
	server.listen(8080,function() {
		console.log("服务器启动中.....");
	});
