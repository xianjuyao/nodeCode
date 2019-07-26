//封装get方法
function get(url,callback) {
    return new Promise(function (resolve, reject) {
        var xmlhttp;
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
        //请求成功后调用回调函数
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                resolve(xmlhttp.responseText);
                callback(xmlhttp.responseText);
            }
        };
        xmlhttp.onerror=function(error){
            reject(error);
            callback(error);
        };
        xmlhttp.open("GET",url,true);
        xmlhttp.send();

    });
}
    get("../data/data.json")
        .then(function (data) {
            return get("xxxxxxxxxx");
        })
        .then(function (data) {
        });