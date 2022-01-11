const fs=require('fs');

fs.writeFile(__dirname+"/some.txt","somedata",function (err) {
    if(err) throw err
    console.log("file write successfully");
})

