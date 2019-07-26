//	require 是一个方法
//	它的作用是加载模块
/*
 * 	在node中模块有三种: 
 * 		具名的核心模块:比如 fs,http
 * 		用户 自己编写的文件模块
 * 			相对路径必须加上./（这个绝对不要省略，否则会报错）
 * 		在node中，没有全局作用域,只有模块作用域
 * 		外部访问不到内部，内部也访问不到外部
 * 		加载的时候可以省略后缀名
 * 
 */
console.log("start");

function add (x,y) {
	return x+y;
}


let test=require("G:\\js\\node\\module\\say.js");

console.log("end");
