    //node连接mysql
    var mysql      = require('mysql');

    //1.创建数据库连接
    var connection = mysql.createConnection({
        host     : 'localhost',//主机地址
        user     : 'root',  //数据库账号
        password : 'admin', //数据库密码
        database : 'sms'    //数据库名字
    });
    //2.连接数据库
    connection.connect();
    // 3.执行数据操作
    // connection.query('SELECT * from student', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results);
    // });
    //只用一个方法就可以增删改查
    connection.query('insert into student values("201215124","洛天依","女",20,"VS")', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });
    //关闭连接
    connection.end();