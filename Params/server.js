const express=require('express');

//console.log(typeof express);  -->function

const app=express();
 //Static content
 app.use('/public', express.static(__dirname + "/public"));
 
//MW
app.get('/',(req,res)=>{
    res.send('Hello world');
})

//req.paream method
//localhost:4444 {x}{y} means--{p->{x}}

/*app.get('/:city',(req,res)=>{
    res.send('welcome to '+ req.params.city);
})*/

//query param
app.get('/greet',(req,res)=>{
    //console.log(req);
    let person='Guest'
    if(req.query.person)
    person=req.query.person
    res.send('Good Morning '+person);
})

//form read method
app.get('/form',(req,res)=>{
     res.sendFile(__dirname +'/file/form.html');
  })

  


//the port number more then 1024
app.listen(4444,()=>{
    console.log('server start on http://localhost:4444');
})
