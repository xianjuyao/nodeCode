let fs=require("fs");
/*
    文件操作中的相对路径可以省略./
    在模块加载中相对路径不可以省略./
   0
   
    咱们所使用的所有文件操作的API都是异步的
 */

fs.readFile("../data/hello.txt",function (error,data) {
    if (error){
        return console.log(error);
    }
    console.log(data.toString());
});