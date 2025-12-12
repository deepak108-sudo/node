import fs from 'fs';

let a=10
let b=20

function sum(a,b){
    console.log(a+b);
}


fs.readFile("./data.json","utf-8",(err,res)=>{
    console.log(res);
})  //JS handle this code to libuv

setTimeout(()=>{
    console.log("Hello Time out");
},3000);    //JS Handle this code to Libuv

console.log(a);
console.log("Sum:",sum(a,b));