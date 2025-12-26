import express from "express";
import connect from "./database.js";
import User from "./models/users.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/info", async (req, res) => {
  const ans = await User.find({ name: "Mikki" });
  res.send(ans);
});

app.post('/insert',async (req,res)=>{
    //Method 1
    // const user1=new User(req.body);
    // await user1.save();

    //Second method : Create + save
    try{
        await User.create(req.body);
    }
    catch(err){
        console.log(err);
    }

    res.send("User Saved Successfully");
})

//Update
app.put("/update",async (req,res)=>{
    const result=await User.updateOne({name:"Vishal Kumar"},{name:"Raminia",age:100});

    res.send("Updated Successfully");
})


//Delete
app.delete('/delete/:name1',async (req,res)=>{
    const name=req.params.name1;
    await User.deleteOne({name});
    res.send("Deleted Successfully");
})

connect()
  .then(async () => {
    app.listen(3000, () => {
      console.log("Listening to port 3000");
    });

    const res = await User.find({ name: "Mikki" });
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
