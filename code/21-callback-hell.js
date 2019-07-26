    /*
        通过回调嵌套的方式保证异步的顺序

        为了解诀以上编码方式带来的问题(回调地狱嵌套)，
        所以在EcmaScript 6中新增了一一个API:Promise。
        Promise 的英文就是承诺、保证的意思(I promise you)

        Promise容器一旦创建，就执行里面的代码。
     */
    let fs=require("fs");
    let pr=new Promise(function (resolve, reject) {
        fs.readFile("package.json","utf8",function (error,data) {
            //容器中的读取文件任务失败
            if (error){
                // console.log(error);
                //把容器的Pending 状态变为Rejected
                // 也就是说这里调用的reject 方法实际上就是then方法传递的那个function
                reject(error);
            } else {   //容器中的读取文件任务成功了
                // console.log(data);
                //把容器的Pending 状态变为resolved
                resolve(data);
            }
        });
    });
    /*
        pr就是那个承诺
        当pr成功了然后(then) 做指定的操作
        then 方法接收的function 就是容器中的resolve函数
        也就是说这里调用的resolve 方法实际上就是then方法传递的那个function
    */
    pr.then(function (data) {
        console.log(data);
        //当前函数中return 的结果就可以在后面的then中function 接收到
        // 当return一个Promise 对象的时候，
        // 后续的then中的方法的第一个参数会作为p2的resolved
        //                    而第二个参数作为p2的rejected
        return 13131313;
    },function (error) {
        console.log("读取文件失败!",error);
    }).then(function (data) {
        console.log(data);
    },function (error) {
        console.log("读取文件失败!",error);
    }).then(function (data) {

    },function (error) {
       //链式调用
    });