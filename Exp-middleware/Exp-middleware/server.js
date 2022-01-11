const express=require('express');
const req = require('express/lib/request');

const app =express();

app.use('/abc',express.static(__dirname+'/public'));

app.get('/hello',(req,res)=>{
    res.send('<h4>Hello world</h4>')
})

function decryptQueryParams(req, res ,next) {
 //   console.log("decrypt"+req.query)
    // TODO: decrypt all query params as per our logic
    for( q in req.query){
        //console.log(req.query[q]);
        let data=req.query[q];
      //  data=new Buffer(data, 'base64').toString('ascii');
         data=new Buffer.from(data, 'ascii').toString('base64');
        req.query[q]=data;

    }

    next()
}

function decodequery64(req,res,next){
   /* for( q in req.query){
        console.log(req.query[q]);}
        next();
        */
       // console.log("encrypt"+req.query)
    for( q in req.query){
        //console.log(req.query[q]);
        let data=req.query[q];
      //  data=new Buffer(data, 'base64').toString('ascii');
         data=new Buffer.from(data, 'base64').toString('ascii');
        req.query[q]=data;

    }
    next();
   
   
}


app.get('/eval',decodequery64,decryptQueryParams,(req,res)=>{
   // data = data.toUpperCase()
   
 console.log(req.query);
 res.send('<h2>Evaluated</h2>');
})


app.listen(1024,()=>{
    console.log("server start on http//localhost:1024");
})