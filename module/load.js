/**
 * 
 * 
 * 				require方法有两个作用:
 * 					1.加载文件模块并执行里面的代码
 * 					2.拿到被加载文件模块导出的接口对象
 * 				在每个文件模块中斗提供了一个对象:exports
 * 				exports默认是一个空对象
 * 
 * 				IP地址用来定位计算机，
 * 				端口号用来定位具体的应用程序
 * 				所有需要联网的通信软件都必须具有端口号
 */


let add=require("./add");
//let fs=require("fs");
console.log(add.add(1,2));