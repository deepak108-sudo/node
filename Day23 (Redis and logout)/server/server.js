import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import userRoutes from "./routes/userRoutes.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
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
app.post("/api/users/logout", (req, res) => {
  try {
    res.cookie("token", null, { expires: new Date(Date.now()) });
    res.send("Logged out Successfully");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3004;

//Server Started
async function server() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}

server();
