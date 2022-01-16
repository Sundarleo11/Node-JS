const MongoClient=require('mongodb').MongoClient;
//const url="mongodb://localhost:27017/sample";
const url="mongodb://localhost:27017";

MongoClient.connect(url,function(err,data){
    if(err)throw err;
    //step 1: create the databases to connection
   // console.log("connection created successfully");
   var db=data.db("sample");

   //Step 2: To create the collection 
/*   db.createCollection("students",function(err,result){
       if(err) throw err;
       console.log('collection created successfully');
       data.close();
   })*/


   //setp 3: inserte single value
  /* db.collection("students").insertOne({name:"sundar",city:"madurai"},function(err,result){
       if(err)throw err;
       console.log("Document created successfully single value");
       data.close();

   })*/

   //step 4: insert to many value
  /* var mult=[
   {name:"kumar",city:"selam"},
   {name:"aness",city:"chennai"}];

   db.collection("students").insertMany(mult,function(err,result){
    if(err)throw err;
    console.log("Document created successfully multi values");
    data.close();
   });*/
   
   // step 5: find the data
  /* db.collection("students").findOne({},function(err,result){
    if(err)throw err;
    console.log(result.name);
    data.close();
   });*/
   // step 6: find the  alldata
  /* db.collection("students").find({}).toArray(function(err,result){
    if(err)throw err;
    console.log(result);
    data.close();
   });*/

   //step:7 find data
  /* db.collection("students").find({},{projection :{_id:0,name:1}}).toArray(function(err,result){
    if(err)throw err;
    console.log(result);
    data.close();
   });*/
  
   //name
   /*db.collection("students").find({name:'sundar'},{projection : {_id:0}}).toArray(function(err,result){
    if(err)throw err;
    console.log(result);
    data.close();
   });*/

   //char search
  /* db.collection("students").find({name:/^a/},{projection : {_id:0}}).toArray(function(err,result){
    if(err)throw err;
    console.log(result);
    data.close();
   });*/
  // step 10: update the list
  /*  var myfield={city:"chennai"};
    var updatefield={$set:{city:"Trichy"}};
    db.collection("students").updateMany(myfield,updatefield, function(err,result){
    if(err)throw err;
    console.log(result);
    console.log("suessful");
    data.close();
   });*/

   //read the data 
 /*  db.collection("students").find({city:"Trichy"}).toArray(function(err,result){
    if(err)throw err;
    console.log(result);
    data.close();
   });*/

   //sort
  /* let sortoreder={name:1}; // acc to des 1 and des to asc -1
   db.collection("students").find().sort(sortoreder).toArray(function(err,result){
    if(err)throw err;
    console.log(result);
    data.close();
    
   });*/

   //delete
   let deletename={name:'aness'}; // acc to des 1 and des to asc -1
   db.collection("students").deleteOne(deletename,function(err,result){
    if(err)throw err;
    console.log(result);
    data.close();
    console.log("deleted sucessfully");
    
   });

});