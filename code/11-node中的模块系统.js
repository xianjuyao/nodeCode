    /*
        模块作用域解决的是命名冲突的问题
        本质上我们写的代码都是在一个函数里


        如果一个模块直接需要导出一个成员，而不是挂载的方式
        这个时候必须使用以下这种方式:
         module.exports=add;

        require:
            执行被加载模块中的代码
            得到被加载模块中的exports导出接口对象

        exports:
            module.exports=xx 后面的会覆盖前面的赋值

     */
    // let main=require("../module/main.js");
    // console.log(main);

    /*

        node为了简化代码,因此使用一个exports对象直接等于module.exports
        它们指向同一块内存地址

        原理解析:
        exports和module.exports
        一通过exports只能使用.的方式来向外暴露内部变量
            exports. XXX = XXX
        而module. exports既可以通过.的形式，也可以直接赋值
            module. exports. XXX = XXXX
            module. exports = {}
         一定要记住最后返回的是module.exports,而不是exports
     */
       // let array=[1,2,3,4,5,6];
       // console.log(array.slice(0));
       Array.prototype.myFun=function () {
            let start=0;
            let end=this.length;
            if (arguments.length===1){
                start=arguments[0];
            }else if (arguments.length===2){
                start=arguments[0];
                end=arguments[1];
            }
            let temp=[];
            for (let i=start;i<end;i++){
                temp.push(this[i]);
            }
            return temp;
       };
       let fakerArr={
           0:"abc",
           1:"efg",
           2:3,
           length:3
       };
       let demo=[].myFun.call(fakerArr);
       console.log(demo);


