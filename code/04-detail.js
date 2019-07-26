/**
 * 
 * 		node.js中的细节问题
 * 		
 * 
 * 		核心模块:
 * 			在node中,node，为js提供了很多服务器级别的API,这些API绝大多数都被包装到一个具名的核心模块中。
 * 			例如文件操作的fs ,http等等
 * 		核心模块需要通过 require 引入
 * 
 */

//	let	fs=require("fs");
//	fs.mkdir("C:/Users/asus/Desktop/demo",function (error) {
//		console.log(error);
//	});



	//用来获取机器信息
	/*let os=require("os");
	//获取当前机器的cpu的信息
	console.log(os.cpus());
	//获取当前机器的内存  mem memory
	console.log(os.totalmem()/1024/1024/1024);
	//当前更新时间
	console.log(Math.round(os.uptime()/60)+"分钟");
	console.log(os.type());
	console.log(os.EOL);
	let fs=require("fs");
	fs.writeFile("C:"+os.EOL+"Users/asus/Desktop");*/

	//用来操作路径的
	let path=require("path");
	
	//extname extension name 扩展名 获取文件的扩展名
	console.log(path.extname("C:/a/b/c/d/hello.txt"));
