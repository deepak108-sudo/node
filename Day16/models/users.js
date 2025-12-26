import mongoose from "mongoose";
const { Schema } = mongoose;

//step 1: Schema bnaya
const userSchema = new Schema({
  name: String,
  age: Number,
  city: String,
  gender: String,
});

const User=mongoose.model('user',userSchema);

export default User;
