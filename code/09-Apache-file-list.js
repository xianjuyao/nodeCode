	let http=require("http");//加载核心模块
	let fs=require("fs");
	
	let server=http.createServer();//创建服务器

	let filePath="G:/js/node/view";
	server.on("request",function(request,respond){//绑定请求事件
		fs.readdir(filePath,function(error,files){	
			if(error){
			return console.log("目录不存在");
			}
			//字符串解析替换,方法
		});
		fs.readFile(filePath+request.url,function  (error,data) {
				if(error){
					return respond.end("404 Not Found");
				}
				data=data.toString();
				data=data.replace("令人窒息","优秀");
				respond.setHeader("Content-Type","text/html;charset=UTF-8");
				respond.end(data);
		});
	});
	//绑定端口号，启动服务
	server.listen(8080,function() {
		console.log("服务器启动中.....");
	});
