import express from 'express';

const app=express();


// app.get("/",(req,res)=>{
    //     res.send({name:"Rohit"});
    // })
    app.use(express.json());
    
    app.post("/user",(req,res)=>{
        console.log(req.body);
        console.log(typeof req.body.age);
        console.log("Data saved Successfully");
        res.send("Data Saved Successfully");
    })

    app.get("/user",(req,res)=>{
        console.log("Getting data");
        res.send("Getting data");
    })
    
    app.use("/",(req,res)=>{
        res.send({name:"Rohit"});
        //console.log(req);
    })

app.listen(4000,()=>{
    console.log("Server Started");
});