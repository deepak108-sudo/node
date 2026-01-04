import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import userRoutes from "./routes/userRoutes.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import redisClient, {redisConnect} from "./config/redis.js";
import jwt from "jsonwebtoken"
import authMiddleware from "./middleware/authMiddleware.js";
import crypto from "crypto"
dotenv.config();

const app = express();
app.use(express.json()); //for parsing
app.use(morgan("dev"));

app.use(cors());
app.use(cookieParser());

//check
app.get("/", (req, res) => {
  res.send("Yes we are live");
});

//Redirect all /products request
app.post("/api/users/logout",authMiddleware, async (req, res) => {
  try {

    const {token}=req.cookies;
    const payload= jwt.decode(token);

    const tokenHash=crypto.createHash("sha256")
                          .update(token)
                          .digest("hex");

    //Create hash of token so that if stolen do not effect

    //Redis setting toeken as blocked
    const ttl=payload.exp-Math.floor(Date.now()/1000);
    const key=`blocked_token:${tokenHash}`;
    await redisClient.set(key,"Blocked",{EX:ttl});

    
    res.cookie("token", null, { expires: new Date(Date.now())});
    res.send("Logged out Successfully");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3004;

//Server Started
// async function server() {
//   await connectDB();

//   app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`);
//   });
// }

// server();

async function InitializeConnection() {
  try{
     await Promise.all([connectDB(),redisConnect()]);

     app.listen(PORT,()=>{
      console.log(`Server is running at PORT ${PORT}`);
     })
  }
  catch(err){
    console.log(`Error ${err.message}`);
    process.exit(1);
  }
}

InitializeConnection();
