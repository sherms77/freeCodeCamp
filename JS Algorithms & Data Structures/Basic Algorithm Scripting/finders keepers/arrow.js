// normal function
function helloWorld(){
    console.log("Hello World normal"); // Hello World
 }

 // arrow function
 ()=> console.log("Hello World using an arrow function");
//  (h)=> console.log("named Hellow world arrow function"); // does not work -> h is not defined error

 console.log("test");
 console.log(helloWorld());
 console.log(); // unnamed arrow function for hello world -> does not work, outputs 'undefiend'.
//  console.log(h);