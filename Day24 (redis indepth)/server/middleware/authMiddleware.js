import jwt from "jsonwebtoken";
import crypto from "crypto"
import redisClient from "../config/redis.js";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json("Cookies not found");
  }

  //Check it is blocked or not
  const tokenHash=crypto.createHash("sha256")
                        .update(token)
                        .digest("hex");
  const isBlocked= await redisClient.get(`blocked_token:${tokenHash}`);

  if(isBlocked){
    return res.send("Token revoked");
  }


  try {
    //throw error if not matched
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

export default authMiddleware;
