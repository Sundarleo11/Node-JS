const routes=require('express').Router();

let todos=[];

routes.get('/',(req,res)=>{
  res.send(todos);
})

routes.post('/',(req,res)=>{
    todos.push({
        task:req.body.task
    })
    res.send(todos);

})

module.exports=routes