//写入文件
let fs=require("fs");
//	第一个参数是:文件写入的路径 
//	第二个参数是：文件写入的内容
//	第三个参数是:回调函数（error  成功error是null 失败是一个对象）
fs.writeFile("C:/Users/asus/Desktop/test.txt","优秀啊,老哥",function(error){
	if(!error){
		console.log("写入成功");
	}else{
		console.log("写入失败");
	}
});