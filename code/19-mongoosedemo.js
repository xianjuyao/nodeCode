    let mongoose=require("mongoose");

    let Schema=mongoose.Schema;
    //1.连接数据库
    //指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
    mongoose.connect("mongodb://localhost/test",{useNewUrlParser:true});
    //2.设计集合结构(相当于mysql中的表结构)
    //字段名称就是表结构中的属性名称
    //值都是js中的基本数据类型
    /*
        String
        Number
        Date
        Buffer
        Boolean
        Mixed
        ObjectId
        Array
        Decimal128
     */
    // 约束的目的是为了保证数据的完整性，不要有脏数据
    let  usersSchema = new Schema({
        username:{
            type:String,
            require:true //必须有
        },
        password:{
            type: String,
            require: true
        },
        email:{
            type:String
         }

    });
    //3.将文档结构发布成模型
    /*
    mongoose. model方法就是用来将一个 架构发布为model
    第一个参数:传入一个大写名词单数字符串用来表示你的数据库名称
    mongoose会自动将大写名词的字符串生成小写复数的集合名称
    例如这里的User 最终会变为users 集合名称

 */
    // 返回模型构造函数
   let User=mongoose.model("User",usersSchema);
    //4.增删改查
    //4.1增加数据
    // let user=new User({
    //     username: "洛天依",
    //     password: "123456",
    //     email:"2214452605@qq.com"
    // });
    // user.save(function (error,result) {
    //     if (error){
    //         console.log("保存失败!");
    //     }else {
    //         console.log("保存成功!");
    //         console.log(result);
    //     }
    // });
    //4.2查询数据
    //4.2.1查询所有
    // User.find(function (error,result) {
    //     if (error){
    //         console.log("查询失败");
    //     }else{
    //         console.log(result);
    //         let id=result[0]._id;
    //         console.log(typeof  (id))
    //     }
    // });
    // User.find()
    //     .then(function (result) {
    //         console.log(result);
    //     });

    // 4.2.2条件查询
    // User.find({username:"如旧"},function (error,result) {
    //     if (error){
    //         console.log("查询失败");
    //     }else{
    //         console.log(result);
    //     }
    // });

    //4.2.3得到一个对象而不是返回一个数组
    //如果是没有查询条件默认返回第一个集合中的第一个
    // User.findOne({username:"如旧"},function (error,result) {
    //     if (error){
    //         console.log("查询失败");
    //     }else{
    //         console.log(result);
    //     }
    // });
    //4.2.4多条件查询 没有返回null
    // User.findOne({
    //     username:"如旧",email: "6260592074@qq.com"
    // },function (error,result) {
    //     if (error){
    //         console.log("查询失败");
    //     }else{
    //         console.log(result);
    //     }
    // });
    // 4.3删除数据
    // User.deleteOne({
    //     username: "洛天依"
    // },function (error,result) {
    //     if(error){
    //         console.log(error);
    //     }else {
    //         console.log("删除成功!");
    //         console.log(result);
    //     }
    // });
    // User.remove({
    //     username: "洛天依"
    // },function (error,result) {
    //     if(error){
    //         console.log(error);
    //     }else {
    //         console.log("删除成功!");
    //         console.log(result);
    //     }
    // });
    //4.4更新数据
    // User.findByIdAndUpdate("5d343f284dcb9a400927b787",{
    //     password:"123456789",
    //     username: "海伊"
    // },function (error,result) {
    //     if (error){
    //         console.log("更新失败!");
    //     } else{
    //         console.log(result);
    //     }
    // });
    // User.updateOne({username:"海伊"},{password:"123456"},function (error,result) {
    //     if (error){
    //         console.log("更新失败!");
    //     } else{
    //         console.log(result);
    //     }
    // });
    // User.updateMany({username:"洛天依"},{password:"987654"},function (error,result) {
    //     if (error){
    //         console.log("更新失败!");
    //     } else{
    //         console.log(result);
    //     }
    // });