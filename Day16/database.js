import mongoose from "mongoose";

async function connect() {
    await mongoose.connect("mongodb+srv://deepak:deepak108@cluster0.e8nzs77.mongodb.net/?appName=Cluster0/B5ookstore");

    console.log(`Connected to db`);
}

export default connect;