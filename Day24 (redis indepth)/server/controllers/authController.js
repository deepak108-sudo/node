import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ message: "User registered Successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // ✅ MUST be false for Postman / localhost
    sameSite: "lax", // strict can cause issues during testing
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    message: `Login Successful ${email}`,
  });
};


export async function info(req,res){
    try{
        const result=await User.find();
        res.send(result);

    }
    catch(err){
        console.log(err);
    }
}