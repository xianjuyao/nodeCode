//在node js中没有DOM 和   BOM
//和浏览器中的js不一样
//console.log(window);
/**
 * 		浏览器中的js是没有读写文件的能力的
 * 		但是node具有文件读写得能力
 *
 */
//================================文件读写实例==============================================
//fs 是 fileSystem 的简写 就是文件系统的意思
//在node中如果想要进行文件操作，就必须引入 fs 这个核心模块
//在fs这个核心模块中就提供了所有文件操作的相关内容（API）
//例如：fs.readFile就是用来读取文件的


	//1.使用require方法加载fs核心模块
	let fs=require("fs");
	//2.读取文件
	//readFile() 第一个参数是要读取文件的路径  第二个参数是一个回调函数
	/**
	 * 		error:
	 * 			如果读取失败,error就是错误对象
	 * 		data:
	 * 			如果读取失败,data就是undefined
	 * 			如果读取成功,data就是成功对象
	 * 
	 */
	fs.readFile("../data/hello.txt",function(error,data){
		//<Buffer 48 65 6c 6c 6f 57 6f 72 6c 64 21>
		//默认文件中存储的是二进制数据  0 和 1
		//这里为什么看到的不是0和1呢    原因是二进制转换成了十六进制了
		//但是无论十六进制还是二进制我们都看不懂
		//所以我们可以通过toString方法把它转换成字符串
//		console.log(data.toString());
		//在这里通过判断error是否为空来确认是否有错误发生
		if(error){
			console.log("读取文件失败");
		}else{
			console.log(data.toString());
		}
//		console.log(error);
	});
