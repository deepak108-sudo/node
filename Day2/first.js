//require("./second"); //<---------- cjs Common js module

//----------------(IIFE) under the hood is of require it got replace like that
// (function(){
//     console.log("I am second");

//     function sum(a,b){
//         console.log(a+b);
//     }
//     sum(3,99);
// })();

const {sum,sub}=require("./second");

console.log("Hello i am first");
sum(3,420);
sub(56,67);

//I need second.js in my first.js file
//sum(3,4);