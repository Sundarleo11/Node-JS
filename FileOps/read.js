const fs=require('fs');

fs.readFile(__dirname+"/some.txt",function (err,data) {
    if(err) throw err
    console.log(data.toString());
})