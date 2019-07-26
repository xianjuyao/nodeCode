    // find接收一个方法作为参数，方法内部返回一个条件
    // find会遍历所有的元素，执行你给定的带有条件返回值的函数
    // 符合该条件的元素会作为find 方法的返回值
    // 如果遍历结束还没有符合该条件的元素，则返回undefined
    let arr=[1,3,5,7,9,11,13];
    Array.prototype.myfind=function (conditionFunc) {
        for (let i=0;i<this.length;i++){
            if (conditionFunc(this[i],i)){
                return this[i];
            }
        }
    };
    let temp=arr.myfind(function (item,index) {
        return item===3;
    });
    console.log(temp);

    /*

        // Express对于没有设定的请求路径，默认会返回Cat not get xXX
        //如果你想要定制这个404
        //需要通过中间件来配置
        //咱们讲中间件的时候说一下如何处理
        //只需要在自己的路由之后增加一个
    app.use(function (req, res) {
    //所有未处理的请求路径都会跑到这里
    //404
    })



     */

