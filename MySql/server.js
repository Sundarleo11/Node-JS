const mysql=require('mysql');

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"kare",
})

conn.connect(function(err){
    if(err) throw err;
    console.log("connection successfully");
    //create database

  /*conn.query("create database KARE",(function(err,result){
        if(err)throw err;
        console.log("created database");
    }))*/

   //table 1
   
/*conn.query("create table students (student_id int, student_name varchar(200), student_city varchar(200))",(function(err,result){
        if(err)throw err;
        console.log("created Table");
    }))*/

    //table 2
 /*   conn.query("create table marks (student_id int, student_grade varchar(200))",(function(err,result){
        if(err)throw err;
        console.log("created Table marks");
    }))*/


    //insertion single values
  /*  var sql="insert into students (student_id, student_name, student_city) values (1,'sundar','madurai')";

    conn.query(sql,(function(err,result){
        if(err)throw err;
        console.log("inserted successfully in students");
    })); */

    //inserted multi values table -1
 /*   var sql="insert into students (student_id, student_name, student_city) values ?";
    var values=[

        [2,'Ajay','AP'],
        [3,'Aness','chennai'],
        [4,'sathi','selam'],
    ];


    conn.query(sql,[values],(function(err,result){
        if(err)throw err;
        console.log("multi inserted successfully in students");
    })); */

     //inserted multi values table -2
 /*    var sql="insert into marks (student_id, student_grade) values ?";
     var values=[
         [1,'S'],
         [1,'B'],
         [1,'C'],
         [2,'A'],
         [2,'S'],
         [2,'S'],
         [3,'C'],
         [3,'C'],
         [4,'B'],
         [4,'B'],
     ];
 
 
     conn.query(sql,[values],(function(err,result){
         if(err)throw err;
         console.log("multi inserted successfully in marks");
     })); */

     
      var sql1="select * from students";
      var sq2l="select * from marks";
      var sq2="select * from marks where student_grade='A'";
      var sq3="select * from marks order by student_grade desc";
      var sq4="select student_name as name,student_grade as grade from students join marks on students.student_id=marks.student_id order by name desc";
      var sq5="update students set student_city='usilampatti' where student_city='madurai'";
      var sq6="select student_grade,count(student_id) from marks group by student_grade ";
      var sq7="delete from students where student_id>4";
      var sq8="drop the table or database";
 
      conn.query(sq6,(function(err,result){
          if(err)throw err;
          console.log(result);
      }));
 

})