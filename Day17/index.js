import express from "express";
import dbConnect from "./database.js";
import User from "./users.js";

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {

    //Api level validation
    const mandatoryField=["firstName","email","age"];

    const IsAllowed= mandatoryField.every((k)=>Object.keys(req.body).includes(k));

    if(!IsAllowed){
        throw new Error("Fields Missing");
    }

    
  try {
    await User.create(req.body);
    res.send(`User registered Successfully`);
  } catch (err) {
    res.send(err.message);
  }
});

app.get("/info", async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send(`Deleted Successfully`);
  } catch (err) {
    console.log(err.message);
  }
});

app.patch("/user", async (req, res) => {
  try {
    const {id, ...remaining } = req.body;
    await User.findByIdAndUpdate(id, remaining,{"runValidators":true}); //takes two parameter

    res.send("Updated Successfully");
  } catch (err) {
    console.log(err.message);
  }
});

async function startServer() {
  try {
    await dbConnect();

    app.listen(5000, () => {
      console.log("Server is running");
    });
  } catch (err) {
    res.send(err.message);
  }
}

startServer();
