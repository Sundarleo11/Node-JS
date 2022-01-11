const lib1=require('./lib1');

console.log('hello world');

//use global in if condition
if(typeof window !='undefined'){
    console.log('running in browser');
}else{
    console.log('running in Node');
}

//javascript function call
//sayhello('sundar')

//node function call
lib1.sayhello('sundar');