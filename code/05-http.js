//使用node构建一个web服务器
/**
 * 在node中专门提供了一个核心模块:http
 * http 这个模块就是创建服务器
 * 
 * 
 * 最简单的http服务
 */


/*
 * 1.加载http核心模块
 * 
 */
	let http=require("http");
	//2.使用http.createServer()方法创建一个web服务器
	// 返回一个Server实例
	let server=http.createServer();
	//发送请求-->接受请求-->处理请求-->发送响应
	
	//3.注册request请求事件   当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数:回调函数
	//类似jquery的on方法
	server.on("request",function(){
		console.log("HelloWorld");
	});
	
	//4.	绑定端口号   启动服务器
	server.listen(8080,function(){
		 console.log("服务器	启动中，可以通过http://127.0.0.1:8080访问");
	});
 	 // ctrl+c关闭服务器