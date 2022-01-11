const express=require('express');

const app =express();


function m1(req,res,next){
    console.log("MW -1")
    next();
    console.log("middleware -1")
}
function m2(req,res,next){
    console.log("MW -2")
    next();
    console.log("middleware -2")
}
function m3(req,res,next){
    console.log("MW -3")
    next();
    console.log("middleware -3")
}

app.get('/',m1,m2,m3,(req,res)=>{
    console.log('pre work');
    res.send('<h1>Hello world</h1>');
    console.log('post work');
})

app.listen(8081,()=>{
    console.log("server start on http//localhost:8081");
})