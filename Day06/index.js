const express=require('express');

const app=express();
app.use("/users/:id/:user",(req,res)=>{
    console.log(req.params);
    res.send({"name":"Deepak","age":23,"money":70});
})

app.listen(4000,()=>{
    console.log("Server started");
})


app.use("/about",(req,res)=>{
    res.send("I am about Page");
})

app.use("/contact",(req,res)=>{
    res.send("I am Contact Page");
})

app.use("/payment",(req,res)=>{
    res.send("I am payment Page");
})

app.use((req,res)=>{
    res.send({"name":"Deefddfdpa", "age":23});
})
