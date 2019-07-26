//解决中文乱码的问题

	//加载核心模块http
	let http=require("http");
	//创建服务器对象
	let server=http.createServer();
	//监听请求
	server.on("request",function(request,respond){
		//在服务器端默认发送的数据，其实是 utf-8编码的内容
		//但是浏览器不知道你是utf-8编码的内容
		//浏览器在不知道服务器响应的内容的编码情况下会按照你电脑操作系统的默认情况下编码去解析 
		//中文操作系统默认是gbk
		//解决方法就是告诉浏览器我给你发送的内容是什么编码的
		//Content-Type:内容类型
		//text/plain:就是普通文本的意思
		if(request.url==="/"){	
		respond.setHeader("Content-Type","text/plain;charset=UTF-8");
		let products=[
			{name:"洛天依",age:18,sex:"女"},
			{name:"星尘",age:18,sex:"女"},
			{name:"乐正凌",age:18,sex:"女"},
		];
		//如果你发送的是html格式的字符串则也要告诉浏览器我给你发送的是text/html代码
		respond.end(JSON.stringify(products));	
		}else{
			respond.setHeader("Content-Type","text/html;charset=UTF-8");
			respond.end("<h1>簪花人间</h1>");
		}
	});
	//启动服务器，并监听端口
	server.listen(8080,function(){
		console.log("服务器正在启动中....");
	});
