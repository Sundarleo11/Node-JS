const express=require('express');

const app=express();

app.get('/hello',(req,res)=>{
  //  console.log('<h1>Hello world</h1>');
  let name='Guest';
  if(req.query.user){
      name=req.query.user;
  
  }
  res.send('Hello '+ name);
 // res.send('<h1>Hello world</h1>');
})

app.use('/abc',express.static(__dirname+'/public'));
app.listen(8080,()=>{
    console.log('server start on http://localhost:8080');
})