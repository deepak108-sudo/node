import { Timestamp } from "bson";
import { kMaxLength } from "buffer";
import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  lastName: {
    type: String,
    minLength: 2,
    MaxLength: 50,
  },
  gender: {
    type: String,
   // enum: ["female", "male", "others"],

    validate(value){
        if(!["female","male","others"].includes(value)){
            throw new Error("Invalid Gender");
        }
    }

  },
  age: {
    type: Number,
    min: 12,
    max: 70,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase:true,
    immutable:true
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 150,
  },
  photoUrl: {
    type: String,
    default: "This is your default photo",
  },
},{timestamps:true});

const User = new mongoose.model("user", userSchema);
export default User;
