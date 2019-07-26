let fs = require("fs");

function pReadFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf8", function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

pReadFile("package.json")
    .then(function (data) {
        console.log(data);
    })
    .then(function (data) {

    })
    .then(function (data) {

    });
