const express=require('express');
const route = require('./routes/todos');

const app=express();

app.set('view engine','hbs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/todos',route);

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to  8080</h1>');
})

app.listen(8080);