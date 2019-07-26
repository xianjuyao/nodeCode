let http=require("http");
let server=http.createServer();

/**
 * 	request 请求处理函数，需要接收两个参数:
 * 	Request:	请求对象可用来获取客户端的一些请求信息，例如请求路径
 * 	Response:   响应对象可以用来给客户端发送响应消息
 * 
 */
server.on("request",function(request,response){
	//request.url 显示请求路径 是端口号后面的路径
	console.log("请求路径是:"+request.url);
	//response	对象有一个方法 write可以用来给客户端发送响应数据
	//write 可以使用多次 ，但是最后一定要使用end来结束响应，否则客户端会一直等待。
	/*if(request.url==="/html"){
		response.write("html");
	}else if(request.url==="/login"){
		response.write("login");
	}else if(request.url==="/register"){
		response.write("register!");
	}else{
		response.write("洛天依");
	}*/
	
	if(request.url==="/"){
		//如何返回json数据	
		let products=[
			{name:"洛天依",age:18,sex:"女"},
			{name:"星尘",age:18,sex:"女"},
			{name:"乐正凌",age:18,sex:"女"},
		];
		console.log("请求的端口号是:"+request.socket.remotePort);
		console.log("请求的IP是:"+request.socket.remoteAddress);
		//响应内容只能是二进制数据和字符串
		/*
		 * 	数字
		 * 	对象
		 * 	数组
		 *  布尔值	
		 * 	都不行
		 * 
		 * 	可以返回JSON字符串和二进制数据
		 */
		response.end(JSON.stringify(products));
		//response.end();
	}

	//end() 结束响应
	//response.end(JSON.stringify(products));
});
	//绑定服务器端口，启动服务
server.listen("8080",function(){
	
});
