import mongoose from "mongoose";

const {Schema} =mongoose;

async function connect() {
    await mongoose.connect("mongodb+srv://deepak:deepak108@cluster0.e8nzs77.mongodb.net/?appName=Cluster0/B5ookstore");

    //step 1: Schema bnaya
    const userSchema= new Schema({
        name:String,
        age: Number,
        city:String,
        gender:String
    })

    //Step 2: Model ko create krna, Collection ko create krna Here user is collection name and userSchema is Kiss trah dikehga.
    //User is like class
    const User=mongoose.model("user",userSchema);
    
    //object
    const user1=new User({name:"Mouse Kumar", age:25, city:"raipur", gender:"female"});
    console.log("Saving...");
    console.log(user1);

    await user1.save();

    //Create and save at one line
    await User.create({name:"Mikki",age:23});

    //Insert more than one at once
    await User.insertMany({name:"Keyboard kumar",age:32},{name:"battery kumar",age:45});

    //Find all the user
    const ans=await User.find();
    console.log(ans);

    //Find particular
    const res=await User.find({name:"Mikki"});
    console.log(res);
}

connect();