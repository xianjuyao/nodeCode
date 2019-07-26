	let http=require("http");
	let fs=require("fs");
	let server=http.createServer();
	server.on("request",function(request,respond){
		//html.html
		let url=request.url;
		if(url==="/"){
			//不可取
			//respond.end("<!DOCTYPE html><html><head><meta charset="UTF-8"><title>HelloWorld</title></head><body><h1>簪花人间</h1><h1>首页</h1></body></html>");
			//使用文件系统进行操作
			fs.readFile("../view/html.html",function(error,data){
				if(!error){
					respond.setHeader("Content-Type","text/html;charset=UTF-8");
					respond.end(data);//end()方法支持两种数据类型，一种是二进制，一种是字符串 可以直接转
				}else{
					respond.setHeader("Content-Type","text/plain;charset=UTF-8");
					respond.end("请求失败......");
				}
			});
		}else if(url==="/indexJS"){//请求index,js
			fs.readFile("../view/html.js",function(error,data) {
				if(!error){
					//url:统一资源定位符
					//一个url最终其实是要定位到一个资源的
					//图片不需要设置编码了 我们常说的编码一般是字符编码
					respond.setHeader("Content-Type","application/x-javascript");
					respond.end(data);
				}else{
					respond.setHeader("Content-Type","text/plain;charset=UTF-8");
					respond.end("请求失败......");
				}
			});	
		}else if(url==="/picture"){//请求图片
			fs.readFile("../view/icon1.png",function(error,data) {
				if(!error){
					//url:统一资源定位符
					//一个url最终其实是要定位到一个资源的
					//图片不需要设置编码了 我们常说的编码一般是字符编码
					respond.setHeader("Content-Type","image/png");
					respond.end(data);
				}else{
					respond.setHeader("Content-Type","text/plain;charset=UTF-8");
					respond.end("请求失败......");
				}
			});	
		}
	});

	server.listen(8080,function(){
		console.log("服务器正在启动中....");
	});
