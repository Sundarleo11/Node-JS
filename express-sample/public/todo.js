$(function (){
    let task=$('#todo');
    let submit=$('#submit');
    let todolist=$('#list');

    submit.click(function(){
        //console.log('button was clicked');
        let newTodo=task.val();
       // console.log(newTodo);
       $.post(
           '/todos',
           {task:newTodo},
           function(data){
               //console.log(data);
             todolist.empty();
               for(todo of data){
                  todolist.append("<li>" + todo.task +"</li>")
               }
           }


       )
    })
})
