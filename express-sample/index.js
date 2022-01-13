const express=require('express');
const todoRoute=require('./routes/todos');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended :true}))

app.get('/',function(req,res){
    res.send("hello");
})

app.use('/public',express.static(__dirname+'/public'));
app.use('/todos',todoRoute);

app.listen(8081);