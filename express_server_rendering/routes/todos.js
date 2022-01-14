const route=require('express').Router();

let todos=[
    {task:"this a first task"},
    {task:"this another task"}
]
route.get('/',(req,res)=>{
    res.render('todos',{todos})
})

route.post('/',(req,res)=>{
    todos.push({
        task:req.body.newtodo
    })
    res.redirect('todos');

})


module.exports=route
